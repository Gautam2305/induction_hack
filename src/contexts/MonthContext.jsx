import { createContext, useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import { useCalendar } from "./CalendarContext";
const MonthContext = createContext();

const MonthProvider = ({children}) => {
    const {calendarMonth} = useCalendar();
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    useEffect(()=> {
        if( calendarMonth !== null){
            setMonthIndex(calendarMonth);
        }
    })
    return(
        <MonthContext.Provider value={{monthIndex,setMonthIndex}}>
            {children}
        </MonthContext.Provider>
    )
}

const useMonth = () => useContext(MonthContext);

export {MonthProvider,useMonth}