import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import React from 'react';


const Calendar: React.FC = () => {
    
    return <FullCalendar plugins={[timeGridPlugin]} />
}

export default Calendar