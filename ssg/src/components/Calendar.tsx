import FullCalendar from "@fullcalendar/react";
import register from "preact-custom-element";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from "@fullcalendar/list";

const EVENTS =
    "c_0e61cd901383f3d7ae9ff52f57dceae240a1dac3c9b5e426448b8751bf7f4bce@group.calendar.google.com";

export const Calendar = () => {
    return (
        <FullCalendar
            plugins={[googleCalendarPlugin, listPlugin]}
            googleCalendarApiKey="AIzaSyBQ3LpM9SAS9R3LOuJQbbzs89M_lnfJie4"
            events={{
                googleCalendarId: EVENTS,
            }}
            aspectRatio={0.75}
            eventClick={(event) => {
                event.jsEvent.preventDefault();
            }}
            eventDataTransform={(event) => ({
                ...event,
                url: undefined,
            })}
            initialView="listWeek"
            locale={"fi"}
            firstDay={1}
            headerToolbar={{
                left: "today",
                center: "",
                right: "prev,next",
            }}
            buttonText={{
                today: "Tänään",
            }}
            stickyHeaderDates={false}
        ></FullCalendar>
    );
};

register(Calendar, "calendar-component", [], { shadow: false });
