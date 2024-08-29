/* eslint-disable @typescript-eslint/no-unused-vars */
// remove this later^
import { useLanguage } from "@/lib/LanguageContext";
import enLocale from "@fullcalendar/core/locales/en-gb";
import fiLocale from "@fullcalendar/core/locales/fi";
import svLocale from "@fullcalendar/core/locales/sv";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/timegrid";

const WeekCalendar = () => {
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
        schedulerLicenseKey={process.env.FULL_CALENDAR_KEY}
        plugins={[dayGridPlugin]}
        initialView="timeGridWeek"
        locale={currentLocale}
      />
      <div />
    </>
  );
};

export default WeekCalendar;
