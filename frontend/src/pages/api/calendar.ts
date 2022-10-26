import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../util/google";

const auth = new GoogleAuth({
    scopes: [
        "https://www.googleapis.com/auth/calendar.readonly",
    ],
    projectId: "satakuntatalo-services"
});

const getCalendarApi = async () => google.calendar({version: "v3", auth: await auth.getClient()});

type Data = any

const CALENDAR_IDS = [
    "c_0e61cd901383f3d7ae9ff52f57dceae240a1dac3c9b5e426448b8751bf7f4bce@group.calendar.google.com",
]

export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse<Data>
) {
    const calendarApi = await getCalendarApi();
    const result = await calendarApi.events.list({
        calendarId: CALENDAR_IDS[0],
        singleEvents: true
    })
    
    res.status(200).json(result.data.items)
}