import { useLanguage } from "@/lib/LanguageContext";
import { EventApi } from "@fullcalendar/core";
import enLocale from "@fullcalendar/core/locales/en-gb";
import fiLocale from "@fullcalendar/core/locales/fi";
import svLocale from "@fullcalendar/core/locales/sv";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/timegrid";
import { debounce } from "@mui/material";
import { useCallback, useState } from "react";

const WeekCalendar = () => {
  const { language } = useLanguage();
  const localeMap = {
    fi: fiLocale,
    sv: svLocale,
    en: enLocale,
  };
  const currentLocale = localeMap[language] || enLocale;

  const [minTime, setMinTime] = useState("12:00:00");
  const [maxTime, setMaxTime] = useState("24:00:00");

  // there was way too much empty space, mostly before any events,
  // this should cut that out and leave a 2hr bufer on either side
  const adjustTimeRange = useCallback(
    debounce((events: EventApi[]) => {
      if (events.length > 0) {
        const eventTimes = events.map((event) => ({
          start: new Date(event.startStr).getHours(),
          end: new Date(event.endStr).getHours(),
        }));

        const earliestEventStart = Math.min(...eventTimes.map((e) => e.start));
        const latestEventEnd = Math.max(...eventTimes.map((e) => e.end));

        setMinTime(`${Math.max(earliestEventStart - 2, 0)}:00:00`);
        setMaxTime(`${Math.min(latestEventEnd + 2, 24)}:00:00`);
      }
    }, 300),
    [],
  );

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        eventSources={[
          {
            googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID_1,
            googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          },
          {
            googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID_2,
            googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          },
          {
            googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID_3,
            googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          },
        ]}
        initialView="timeGridWeek"
        locale={currentLocale}
        slotMinTime={minTime}
        slotMaxTime={maxTime}
        eventsSet={adjustTimeRange}
        contentHeight="auto"
      />
      <div />
    </>
  );
};

export default WeekCalendar;
