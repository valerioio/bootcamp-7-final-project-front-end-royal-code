import List from "../../components/List";
import css from "./BootcamperDashboard.module.css";
import Calendar from "../../components/Calendar";
import PinBoard from "../../components/PinBoard";
import Event from "../../components/Event";
import Pin from "../../components/Pin";
import { eventData } from "../../data";
function dateInTheFuture(daysFromToday) {
  return new Date(new Date().setDate(new Date().getDate() + daysFromToday));
}

export default function BootcamperDashboard({ Listings, name, recordings }) {
  return (
    <div>
      <h1 className={css.mainTitle}>Dashboard</h1>
      <p className={css.subTitle}>{new Date().toDateString()}</p>
      <div className={css.dashboard}>
        <PinBoard />
      </div>
      {/* <Calendar /> */}
      <h2 className={css.secondaryTitle}>Upcoming events</h2>
      <ul>
        {eventData.map((event, i) => (
          <li>
            <Event
              key={`${i}147`}
              date={new Date(event.date)}
              eventText={event.event.join(",  ")}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
