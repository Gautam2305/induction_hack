import React from "react";
import { Day } from "./Day";
import styles from "../components/Month.module.css";
const Month = ({month}) => {
    return(
        <div className={`${styles.mainCalendar}`}>
            {month.map((row,index)=>(
                <React.Fragment key={index}>
                    {row.map((day,id) => (
                        <Day day={day} key={id} rowIndex={index} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}
export {Month};