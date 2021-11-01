// import mui stuff
// import react
// return
// the date picker
// the list of calendar items (ul) conditionally rendered
// a button which allows you to add a new event (input form component)
// useEffect that updates the state

import React, { useState, useEffect, useRef } from "react";
import List from "../List";
import InputForm from "../InputForm";

// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

export default function Calendar() {
  const [events, setEvents] = useState([]);
  let counter = 0;
  const firstUpdate = useRef(true);
  useEffect(() => {
    async function getEvents() {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }
      const res = fetch("");
      const data = await res.json();
      setEvents(data);
    }
    getEvents();
  }, [counter]);
  return (
    <>
      <input type="date" />
      <button onClick={counter++}>Get events</button>
      <List Listings={events} />
      <InputForm />
    </>
  );
}
