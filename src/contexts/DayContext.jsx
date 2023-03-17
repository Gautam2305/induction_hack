import dayjs from "dayjs";
import React, { useContext, createContext, useState } from "react";

const DayContext = createContext();

const DayProvider = ({children}) => {
    const [daySelect,setDaySelect] = useState(dayjs(new Date()));
    
    return(
        <DayContext.Provider value={{daySelect,setDaySelect}}>
            {children}
        </DayContext.Provider>
    )
}

const useDay = () => useContext(DayContext);

export {useDay, DayProvider};