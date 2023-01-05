import { render, createElement } from "preact";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

addEventListener("load", () => {
  const localizer = momentLocalizer(moment);

  const calendarElement = document.getElementById("calendar");
  render(
    createElement(Calendar, {
      localizer,
    }),
    calendarElement
  );
});
