import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";

const auth = new GoogleAuth({
    scopes: [
        "https://www.googleapis.com/auth/calendar.readonly",
    ],
    projectId: "satakuntatalo-services"
});

var client: Awaited<ReturnType<GoogleAuth["getClient"]>> | undefined;

const getClient = async () => {
    if (!client) {
        client = await auth.getClient()
    }
    return client
}

export {
    getClient
}