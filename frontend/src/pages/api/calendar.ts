import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../util/google";
import {EventInput, EventSourceInput} from "@fullcalendar/react";
import {z} from "zod";

const auth = new GoogleAuth({
    scopes: [
        "https://www.googleapis.com/auth/calendar.readonly",
    ],
    projectId: "satakuntatalo-services"
});

const getCalendarApi = async () => google.calendar({version: "v3", auth: await auth.getClient()});

const CALENDAR_IDS = [
    "c_0e61cd901383f3d7ae9ff52f57dceae240a1dac3c9b5e426448b8751bf7f4bce@group.calendar.google.com",
]

const querySchema = z.object({
    start: z.string(),
    end: z.string()
})

export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse<EventInput>
) {
    const {start, end} = querySchema.parse(req.query)

    const calendarApi = await getCalendarApi();

    const result = await calendarApi.events.list({
        calendarId: CALENDAR_IDS[0],
        singleEvents: true,
        timeMin: start,
        timeMax: end
    })

    if (result.data === undefined || result.data.items === undefined) {
        res.status(500);
        return;
    }
    res.status(200).json(result.data.items.map(event => ({
        id: event.id,
        title: event.summary,
        start: event.start?.dateTime,
        end: event.end?.dateTime,
        description: event.description
    })))
}