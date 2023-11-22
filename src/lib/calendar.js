import { render, createElement } from "preact";
import { Calendar, momentLocalizer } from "react-big-calendar";
import dates from "react-big-calendar/lib/utils/dates";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const loadCalendar = async () => {
  const localizer = momentLocalizer(moment);

  const calendarElement = document.getElementById("calendar");

  const res = await fetch("http://localhost:8081");
  const events = await res.json();
  console.log(events);

  render(
    createElement(Calendar, {
      localizer,
      events,
    }),
    calendarElement
  );
};

const onNavigate = (date, view) => {
  let start, end;

  if (view === "month") {
    start = moment(date).startOf("month").startOf("week");
    end = moment(date).endOf("month").endOf("week");
  }

  return { start, end };
};

addEventListener("load", () => loadCalendar());
