import React from "react";
import { useModal } from "../contexts/ModalContext";
import { SmolCalendar } from "./SmolCalendar";
import styles from "../components/Sidebar.module.css";
const Sidebar = () => {
    const { setShowModal } = useModal();
    return(
        <aside className={`${styles.sidebar}`}>
            <div>
                <button className={`${styles.btnPrimary}`} onClick={()=>setShowModal(true)}><i className="fa-regular fa-plus plus-icon"></i><span>Create</span></button>
            </div>
            <SmolCalendar/>
        </aside>
    )
}
export {Sidebar};