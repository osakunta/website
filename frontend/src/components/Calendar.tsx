import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import resourceTimeGrid from "@fullcalendar/resource-timegrid";

const Calendar: React.FC = () => {

    return (

            <FullCalendar
                plugins={[ dayGridPlugin, resourceTimeGrid ]}
                initialView="dayGridMonth"
                schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
                events="/api/calendar"
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                }}
                locale='fi'
    firstDay={1}
    displayEventEnd
        nextDayThreshold= '00:00:00'
        height= 'auto'
        eventDisplay= 'block'
             />
    )
}

export default Calendar;