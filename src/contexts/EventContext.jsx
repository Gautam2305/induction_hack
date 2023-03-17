import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { EventReducer } from "./EventReducer";

const EventContext = createContext();
const initialState = () => {
    const storageEvent = localStorage.getItem('state');
    const parsedEvent = storageEvent ? JSON.parse(storageEvent) : []

    return parsedEvent;
}
const EventProvider = ({children}) => {
    const [state ,dispatch] = useReducer(EventReducer,[],initialState);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [labels, setLabels] = useState([]);
    useEffect(()=>{
        localStorage.setItem('state', JSON.stringify(state));
    },[state]);
    useEffect(() => {
        setLabels((prevLabels) => {
          return [...new Set(state.map((evt) => evt.label))].map(
            (label) => {
              const currentLabel = prevLabels.find(
                (lbl) => lbl.label === label
              );
              return {
                label,
                checked: currentLabel ? currentLabel.checked : true,
              };
            }
          );
        });
      }, [state]);
      const updateLabel = (label) => {
        setLabels(
          labels.map((lbl) => (lbl.label === label.label ? label : lbl))
        );
      }
    return(
        <EventContext.Provider value={{state,dispatch,selectedEvent,setSelectedEvent,labels,setLabels,updateLabel}}>
            {children}
        </EventContext.Provider>
    )
}
const useEvent = () => useContext(EventContext);

export {useEvent, EventProvider};