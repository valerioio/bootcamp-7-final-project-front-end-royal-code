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
  const [date, setDate] = useState();
  const [eventInfo, setEventInfo] = useState("");

  let counterGet = 0;
  let counterAdd = 0;
  const firstUpdateGet = useRef(true);
  const firstUpdateAdd = useRef(true);

  useEffect(() => {
    async function getEvents() {
      if (firstUpdateGet.current) {
        firstUpdateGet.current = false;
        return;
      }
      const res = fetch(""); // use date here
      const data = await res.json();
      setEvents(data);
    }
    getEvents();
  }, [counterGet]);

  function updateDate(e) {
    setDate(e.target.value);
  }

  function updateEventInfo(e) {
    setEventInfo(e.target.value);
  }

  useEffect(() => {
    async function addEvent() {
      if (firstUpdateAdd.current) {
        firstUpdateAdd.current = false;
        return;
      }
      const res = fetch("", {
        method: "POST",
        body: JSON.stringify({
          date: date,
          eventInfo: eventInfo,
        }),
      });
      const data = await res.json();
    }
    addEvent();
  }, [counterAdd]);
  return (
    <>
      <input type="date" onChange={updateDate} />
      <button onClick={counterGet++}>Get events</button>
      <List Listings={events} />
      <InputForm
        handleSubmit={() => {
          counterAdd++;
        }}
        handleChange={updateEventInfo}
        eventInfo={eventInfo}
      />
    </>
  );
}
