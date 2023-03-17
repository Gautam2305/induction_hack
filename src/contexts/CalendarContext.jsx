import React, { createContext, useContext, useState} from "react";
const CalendarContext = createContext();

const CalendarProvider = ({children}) => {
    const [calendarMonth, setCalendarMonth] = useState(null);
    const [smolCalendarMonth, setSmolCalendarMonth] = useState(null);
    return(
        <CalendarContext.Provider value={{calendarMonth,setCalendarMonth,setSmolCalendarMonth,smolCalendarMonth}}>
            {children}
        </CalendarContext.Provider>
    )
}

const useCalendar = () => useContext(CalendarContext);

export {useCalendar,CalendarProvider};