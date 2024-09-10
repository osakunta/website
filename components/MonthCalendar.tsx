import { useLanguage } from "@/lib/LanguageContext";
import enLocale from "@fullcalendar/core/locales/en-gb";
import fiLocale from "@fullcalendar/core/locales/fi";
import svLocale from "@fullcalendar/core/locales/sv";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar from "@fullcalendar/react";

const MonthCalendar = () => {
  const { language } = useLanguage();
  const localeMap = {
    fi: fiLocale,
    sv: svLocale,
    en: enLocale,
  };
  const currentLocale = localeMap[language] || enLocale;
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
        initialView="dayGridMonth"
        locale={currentLocale}
      />
      <div />
    </>
  );
};

export default MonthCalendar;
