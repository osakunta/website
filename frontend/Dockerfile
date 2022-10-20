FROM node:16-alpine as deps
WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm ci


FROM node:16-alpine as builder
WORKDIR /usr/app

COPY --from=deps /usr/app/node_modules ./node_modules
COPY . .

RUN npm run build


FROM node:16-alpine as prod
WORKDIR /usr/app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /usr/app/public ./public

COPY --from=builder --chown=nextjs:nodejs /usr/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/app/.next/static ./.next/static

USER nextjs

ARG PORT=8080
EXPOSE $PORT

ENV PORT $PORT

CMD ["node", "server.js"]
