import React, { useEffect, useState } from "react";
import { useDay } from "../contexts/DayContext";
import { useEvent } from "../contexts/EventContext";
import { useModal } from "../contexts/ModalContext";
import styles from "../components/Modal.module.css"
const labelColors = ['pink','yellow','purple','blue','red','green']
const Modal = () => {
    const {showModal, setShowModal} = useModal();
    const { dispatch,selectedEvent, setSelectedEvent } = useEvent();
    const { daySelect } = useDay();

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description,setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [ selectedLabel, setSelectedLabel ] = useState( selectedEvent ? labelColors.find((label) => label === selectedEvent.label) : labelColors[0]);

    
    const submitHandler = (e) => {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelect.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now()
        }
        if(selectedEvent){
            dispatch({type: "update", payload: calendarEvent});
        }else{
            dispatch({type: "push", payload: calendarEvent});
        };
        setShowModal(false);
    }

    useEffect(()=> {
        if(!showModal){
            setSelectedEvent(null);
        }
    },[showModal])

    return(
        <div className={`${styles.modal}`}>
            <form className={`${styles.modalForm}`}>
                <header>
                    <div className={`${styles.deleteBox}`}>
                    <button className={`${styles.deleteBtn}`} onClick={() => setShowModal(false)}><i className="fa-solid fa-x"></i></button>
                    { selectedEvent && (
                        <button onClick={()=> dispatch({type:"delete", payload: selectedEvent})}><i className="fa-solid fa-trash"></i></button>
                    )}
                    </div>
                </header>
                <div className={`${styles.inputBox}`}>
                    <div>
                    <input type="text" name="title" placeholder="Add title" value={title} onChange={e => setTitle(e.target.value)} required 
                    style={{width:"50%",height:"25px",background:"#0e0e0e",border:"none",borderRadius:"0.5rem"}} />
                    </div>
                    <div>
                    <input style={{width:"50%",height:"5rem",background:"#0e0e0e",border:"none",borderRadius:"0.5rem"}} type="text" name="description" placeholder="Add description" value={description} onChange={e => setDescription(e.target.value)} required  />
                    <span><i className="fa-solid fa-bars-sort"></i></span>
                    </div>
                    <div>
                        {labelColors.map((label,id)=>(
                            <span
                            onClick={()=> setSelectedLabel(label)}
                            style={{color:`${label}`}} key={id}>
                                {selectedLabel === label && <span><i className="fa-solid fa-check"></i></span>}
                            </span>
                        ))}
                    </div>
                </div>
                <footer className={`${styles.footer}`}>
                    <button className={`${styles.savebtn}`} type="submit" onClick={(e)=> submitHandler(e)}>Save</button>
                </footer>
            </form>
        </div>
    )
}
export {Modal};  