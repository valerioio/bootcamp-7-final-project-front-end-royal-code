import css from "./BootcamperDashboard.module.css";
// import Calendar from "../../components/Calendar";
import PinBoard from "../../components/PinBoard";
import Event from "../../components/Event";
//import { eventData } from "../../data";
import { useEffect, useRef, useState } from "react";

function dateInTheFuture(daysFromToday) {
  return new Date(new Date().setDate(new Date().getDate() + daysFromToday));
}

export default function BootcamperDashboard({ Listings, name, recordings }) {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    async function getEventData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/events"
      );
      const data = await res.json();
      setEventData(data);
      return data;
    }
    getEventData();
  }, []);

  return (
    <div>
      <h1 className={css.mainTitle}>Welcome Emanuel</h1>
      <p className={css.subTitle}>{new Date().toDateString()}</p>
      <div className={css.dashboard}>
        <PinBoard user="bootcamper" />

        {/* <Calendar /> */}
        <h2 className={css.secondaryTitle}>Upcoming events</h2>
        <ul>
          {eventData.map((event, i) => (
            <li key={`${i}147`}>
              <Event
                date={new Date(event.date)}
                eventText={event.event.join(",  ")}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
