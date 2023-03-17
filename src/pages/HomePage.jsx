import React, {useEffect} from "react";
import { getMonth } from '../utils';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Month } from '../components/Month';
import { useState } from 'react';
import { useMonth } from '../contexts/MonthContext';
import { Modal } from '../components/Modal';
import { useModal } from '../contexts/ModalContext';
import styles from "../pages/HomePage.module.css"
export const HomePage = ()=> {
    const [currMonth, setCurrMonth] = useState(getMonth());
    const { monthIndex } = useMonth();
    const { showModal } = useModal()

  useEffect(()=>{
    setCurrMonth(getMonth());
  },[monthIndex])

    return(
        <React.Fragment>
        {showModal && <Modal/>}
        <div className='h-screen flex flex-columns'>
        <Header/>
        <div className={`${styles.mainContainer}`}>
          <Sidebar/>
          <Month month={currMonth} />
        </div>
      </div>
      </React.Fragment>
    )
}
