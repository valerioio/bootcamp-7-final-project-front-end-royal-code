import List from "../../components/List";
import css from "./BootcamperDashboard.module.css";
import Calendar from "../../components/Calendar";
import Event from "../../components/Event";
import Pin from "../../components/Pin";

function dateInTheFuture(daysFromToday) {
  return new Date(new Date().setDate(new Date().getDate() + daysFromToday));
}

export default function BootcamperDashboard({ Listings, name, recordings }) {
  return (
    <div>
      <h1 className={css.mainTitle}>Dashboard</h1>
      <p className={css.subTitle}>{(new Date()).toDateString()}</p>
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
      <Calendar />
      <h2 className={css.secondaryTitle}>Upcoming events</h2>
      <ul>
        {Array(7)
          .fill()
          .map((_, i) => (
            <li>
              <Event date={dateInTheFuture(i)} />
            </li>
          ))}
      </ul>
    </div>
  );
}
