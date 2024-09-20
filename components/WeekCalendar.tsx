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

  const eventSources = [
    {
      googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID_1,
      googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      className: "gcal-1",
    },
    {
      googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID_2,
      googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      className: "gcal-2",
    },
    {
      googleCalendarId: process.env.NEXT_PUBLIC_CALENDAR_ID_3,
      googleCalendarApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      className: "gcal-3",
    },
  ];

  // there was way too much empty space, mostly before any events,
  // this should cut that out and leave a 2hr bufer on either side
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        eventSources={eventSources}
        initialView="timeGridWeek"
        locale={currentLocale}
        slotMinTime={minTime}
        slotMaxTime={maxTime}
        eventsSet={adjustTimeRange}
        contentHeight="auto"
        allDaySlot={false}
        eventClick={(info) => {
          // Prevent the default behavior of navigating to Google Calendar
          info.jsEvent.preventDefault(); // Prevent the default click behavior
        }}
        views={{
          timeGridWeek: {
            dayHeaderFormat: {
              weekday: "short",
              day: "2-digit",
            },
          },
        }}
      />
      <div />
    </>
  );
};

export default WeekCalendar;
