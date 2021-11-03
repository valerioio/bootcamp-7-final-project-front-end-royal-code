import List from "../../components/List";
import css from "./BootcamperDashboard.module.css";
import Calendar from "../../components/Calendar";
import Event from "../../components/Event";
import Pin from "../../components/Pin";

export default function BootcamperDashboard({ Listings, name, recordings }) {
  return (
    <div>
      <h1 className={css.mainTitle}>Dashboard</h1>
      <div className={css.dashboard}>
        <div className={`container`}>
          <h1 className={css.title}>Resource List</h1>
          <List className={css.list} Listings={Listings} />
        </div>
        <div className={`container`}>
          <h1 className={css.title}>Lecture Recordings</h1>
          <List className={css.list} Listings={recordings} />
        </div>
      </div>
      <img src='https://images.unsplash.com/photo-1503551723145-6c040742065b-v2' alt='pinboard' />
      <Calendar />
      <h2 className={css.secondaryTitle}>Upcoming events</h2>
      <ul>
        {Array(7)
          .fill()
          .map((_, i) => (
            <li key={i}>
              <Event daysFromToday={i}/>
            </li>
          ))}
      </ul>
      <Pin />
    </div>
  );
}
