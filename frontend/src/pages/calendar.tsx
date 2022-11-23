import React from 'react';
import dynamic from "next/dynamic";

const DynamicCalendar = dynamic(() => import("../components/Calendar"), {ssr: false})

const Calendar: React.FC = () => {
    
    return (
    <div style={{width: "1600px", height: "1200px"}}>
        <DynamicCalendar />
    </div>)

}

export default Calendar