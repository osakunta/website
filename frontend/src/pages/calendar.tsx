import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import resourceTimegrid from "@fullcalendar/resource-timegrid"
import React from 'react';


const Calendar: React.FC = () => {
    
    return (
    <div style={{width: "800px", height: "600px"}}>

     <FullCalendar
        plugins={[ dayGridPlugin, resourceTimegrid ]}
        initialView="resourceTimeGridDay"
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        events="/api/calendar"
        resources={[
          { title: 'event 1', date: '2022-10-10' },
          { title: 'event 2', date: '2022-10-11' }
        ]} />
    </div>)

}

export default Calendar