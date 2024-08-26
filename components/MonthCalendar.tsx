/* eslint-disable @typescript-eslint/no-unused-vars */
// remove this later^
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useLanguage } from "@/lib/LanguageContext";
import fiLocale from "@fullcalendar/core/locales/fi";
import svLocale from "@fullcalendar/core/locales/sv";
import enLocale from "@fullcalendar/core/locales/en-gb";

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
        schedulerLicenseKey={process.env.FULL_CALENDAR_KEY}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={currentLocale}
      />
      <div />
    </>
  );
};

export default MonthCalendar;
