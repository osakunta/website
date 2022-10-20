import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";


type Data = any

export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse<Data>
) {
    const auth = new GoogleAuth({
        scopes: [
            "https://www.googleapis.com/auth/calendar.readonly",
        ],
        projectId: "satakuntatalo-services"
    });
    const client = await auth.getClient();
    const calendarApi = google.calendar({version: "v3", auth: client});
    const result = await calendarApi.calendarList.list();
    
    res.status(200).json(result)
}