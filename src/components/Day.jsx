import React,{ useEffect, useState} from "react";
import dayjs from "dayjs";
import { useDay } from "../contexts/DayContext";
import { useEvent } from "../contexts/EventContext";
import { useModal } from "../contexts/ModalContext";
const Day = ({day,rowIndex}) => {
    const { setDaySelect } = useDay();
    const { setShowModal } = useModal();
    const { state,setSelectedEvent } = useEvent();

    const [dayEvents, setDayEvents] = useState([]);
    
    const getCurrentDay = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'curr-day':'';
    }

    return(
        <div className="day-box">
        <header className="task-box">
        {rowIndex===0 && (<p className="cal-days">{day.format('ddd').toUpperCase()}</p>)}
        <p className={`cal-date ${getCurrentDay()}`}>{day.format('DD')}</p>
        </header>
        <div
        onClick={()=>{
            setDaySelect(day);
            setShowModal(true);
        }}>
            {dayEvents.map((event,id)=>(
                <div 
                onClick={()=> setSelectedEvent(event)}
                style={{background:`event.label`}} key={id}>
                    {event.title}
                </div>
            ))}
        </div>
        </div>
    )
}
export {Day};