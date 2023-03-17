import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useCalendar } from "../contexts/CalendarContext";
import { useDay } from "../contexts/DayContext";
import { useMonth } from "../contexts/MonthContext";
import { getMonth } from "../utils";
import styles from "../components/SmolCalendar.module.css";
const SmolCalendar = () =>{
    const {monthIndex} = useMonth();
    const {setSmolCalendarMonth} = useCalendar()
    const {daySelect,setDaySelect} = useDay();

    const [currMonthIndex, setCurrMonthIndex] = useState(dayjs().month());
    const [currMonth, setCurrMonth] = useState(getMonth());
    

    useEffect(()=>{
        setCurrMonth(getMonth(currMonthIndex))
    }, [currMonthIndex]);
    useEffect(()=> {
        setCurrMonthIndex(monthIndex);
    },[monthIndex])
    const prevMonthHandler = () => {
        setCurrMonthIndex(currMonthIndex-1)
    }
    const nextMonthHandler = () => {
        setCurrMonthIndex(currMonthIndex + 1)
    }

    const getDay = (day) => {
        const format = 'DD-MM-YY';
        const today = dayjs().format(format);
        const currDay = day.format(format);
        const selectDay = daySelect && daySelect.format(format);
        if(today === currDay){
            return "getday-class"
        }else if(currDay===selectDay){
            return "slcday-class";
        }else{
            return "";
        }
    }

    return(
        <div className={`${styles.smolCalendar}`}>
            <header className={`${styles.sidebarHeader}`}>
                 <p style={{fontFamily:"var(--main-text)"}}> {dayjs(new Date(dayjs().year(), currMonthIndex)).format("MMMM YYYY")} </p>
                 <div>
                 <button className={`${styles.btnSmall}`} onClick={() => prevMonthHandler()}><span><i className="fa-solid fa-chevron-left"></i></span></button>
                 <button className={`${styles.btnSmall}`} onClick={() => nextMonthHandler()}><span><i className="fa-solid fa-chevron-right"></i></span></button>
                 </div>
            </header>
            <div className={`${styles.calendarBox}`}>
                {currMonth[0].map((day,id)=> (
                    <span style={{margin:"auto"}} key={id}>
                        {day.format('dd').charAt(0)}
                    </span>
                ) )}
                {currMonth.map((row,id)=> (
                    <React.Fragment key={id}>
                        {row.map((day,id)=> (
                            <button 
                            className={`${getDay(day)} ${styles.datebtn}`} key={id}
                            onClick={()=>{
                                setSmolCalendarMonth(currMonthIndex);
                                setDaySelect(day);
                            }} >
                                <span> {day.format('D')} </span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export {SmolCalendar};