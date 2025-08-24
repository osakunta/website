/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-console */

import fastify, { FastifyPluginCallback, FastifyRequest } from "fastify";
import oauth2Plugin, { OAuth2Namespace } from "@fastify/oauth2";
import jwtPlugin from "@fastify/jwt";
import {
  createAppAuth,
  InstallationAccessTokenAuthentication,
} from "@octokit/auth-app";
import dotenv from "dotenv";
import buildGetJwks from "get-jwks";

declare module "fastify" {
  interface FastifyInstance {
    googleOIDC: OAuth2Namespace;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: { email: string; name: string };
    user: { email: string; name: string };
  }
}

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

const getEnv = (key: string): string => {
  if (process.env[key] === undefined || process.env[key] === "") {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return process.env[key];
};

const app = fastify({
  logger: true,
});

app.register(oauth2Plugin, {
  name: "googleOIDC",
  scope: ["openid", "email", "profile"],
  credentials: {
    client: {
      id: getEnv("CLIENT_ID"),
      secret: getEnv("CLIENT_SECRET"),
    },
  },
  callbackUri: `${getEnv("BASE_URL")}/github/auth/callback`,
  startRedirectPath: "/github/auth",
  discovery: {
    issuer: "https://accounts.google.com",
  },
});

const getJwks = buildGetJwks({
  providerDiscovery: true,
});
app.register(jwtPlugin, {
  decode: { complete: true },
  secret: (_, token, callback) => {
    const {
      header: { kid, alg },
      payload: { iss },
    } = token;
    getJwks.getPublicKey({ kid, domain: iss, alg }).then(
      (publicKey) => callback(null, publicKey),
      (error) => callback(error, undefined),
    );
  },
});

app.addHook("preHandler", (request, reply, done) => {
  console.log(`Request received: ${request.method} ${request.url}`);
  done();
});

app.get("/github/auth/callback", (request, reply) => {
  app.googleOIDC.getAccessTokenFromAuthorizationCodeFlow(
    request,
    reply,
    async (error, result) => {
      if (error) {
        app.log.error(`Error during OAuth2 callback: ${error.message}`);
        return reply.status(500).send("Internal Server Error");
      }

      const userInfoResult = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
          headers: {
            Authorization: `Bearer ${result.token.access_token}`,
          },
        },
      );

      if (!userInfoResult.ok) {
        app.log.error(
          `Failed to fetch user info: ${userInfoResult.statusText}`,
        );
        return reply.status(500).send("Internal Server Error");
      }

      const token = result.token.id_token;

      return reply.type("text/html").send(`
        <html>
          <head>
            <script>
              const receiveMessage = (message) => {
                if (message.data.startsWith && message.data.startsWith("authorizing:github")) {
                  console.log(message);
                  window.opener.postMessage(
                    'authorization:github:success:${JSON.stringify({ token })}',
                    "${getEnv("BASE_URL")}"
                  );
                } 
              }
              window.addEventListener("message", receiveMessage, false);
              window.opener.postMessage("authorizing:github", "${getEnv("BASE_URL")}");
            </script>
            <body>
            </body>
          </head>
        </html>
      `);
    },
  );
});

const githubAuth = createAppAuth({
  appId: getEnv("APP_ID"),
  privateKey: atob(getEnv("PRIVATE_KEY")),
});

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
let _installationToken: string | null = null;
const getInstallationToken = async () => {
  if (_installationToken) return _installationToken;
  _installationToken = (
    await githubAuth({
      type: "installation",
      installationId: getEnv("INSTALLATION_ID"),
    })
  ).token;
  return _installationToken;
};

app.register(
  (f, opts, done) => {
    const getRelativePath = (request: FastifyRequest) => {
      const path = request.url.replace(opts.prefix, "");
      return path;
    };

    f.addHook("preHandler", async (request, reply) => {
      try {
        await request.jwtVerify();
      } catch (error) {
        app.log.error(`JWT verification failed: ${error}`);
        return reply.status(401).send("Unauthorized");
      }
    });

    f.all("/*", async (request, reply) => {
      const path = getRelativePath(request);

      const requestJson = request.body as any;

      // Special case, this endpoint doesnt work for GitHub Apps
      if (path === "/user") {
        return reply.send({
          login: request.user.email,
        });
      }
      if (path === "/repos/osakunta/website/git/commits") {
        if (requestJson.committer === undefined) {
          requestJson.committer = {
            name: "Website CMS App",
            email: "verkkovastaava@satakuntatalo.fi",
          };
        }
        if (requestJson.author === undefined) {
          requestJson.author = {
            name: request.user.name,
            email: request.user.email,
          };
        }
      }

      const response = await fetch(`https://api.github.com${path}`, {
        method: request.method,
        body: JSON.stringify(request.body),
        headers: {
          Authorization: `Bearer ${await getInstallationToken()}`,
        },
      });
      const responseJson = await response.json();

      // Special case, Decap CMS requires this to be true, but its not the case for GitHub apps
      if (path === "/repos/osakunta/website") {
        responseJson.permissions.push = true;
      }

      return reply.status(response.status).send(responseJson);
    });

    done();
  },
  { prefix: "/github/proxy" },
);

// app.get("/github/proxy/*", async (request, reply) => {
//   try {
//     await request.jwtVerify();
//     app.log.info(`GitHub proxy request from ${request.user.email}`);
//   } catch (error) {
//     app.log.error(`JWT verification failed: ${error}`);
//     return reply.status(401).send("Unauthorized");
//   }
// });

const port = parseInt(process.env.PORT || "8080", 10);
app.listen({ port }, (err, address) => {
  if (err) {
    app.log.error(`Error starting server: ${err.message}`);
    process.exit(1);
  }
  app.log.info(`Server is running on ${address}`);
});
