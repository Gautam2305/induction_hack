import dayjs from "dayjs";
import React from "react";
import { useMonth } from "../contexts/MonthContext";
import styles from "../components/Header.module.css"
const Header = () => {
    const { monthIndex,setMonthIndex} = useMonth();
    const prevMonthHandler = () => {
        setMonthIndex(monthIndex-1)
    }
    const nextMonthHandler = () => {
        setMonthIndex(monthIndex+1)
    }
    const resetHandler = () => {
        setMonthIndex(monthIndex === dayjs().month()?monthIndex + Math.random(): dayjs().month())
    }
    return(
        <header className={`${styles.mainHeader}`}>
            <h1 className={`${styles.brandName}`}>Calendar</h1>
            <div className={`${styles.headerBtns}`}>
            <button onClick={()=> resetHandler()} className={`${styles.btnPrimary}`}>Today</button>
            <h2>
                {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
                <button className={`${styles.btnSmall}`} onClick={() => prevMonthHandler()}><span><i className="fa-solid fa-chevron-left"></i></span></button>
                <button className={`${styles.btnSmall}`} onClick={() => nextMonthHandler()}><span><i className="fa-solid fa-chevron-right"></i></span></button>
            </h2>
            </div>
        </header>
    )
}

export {Header};