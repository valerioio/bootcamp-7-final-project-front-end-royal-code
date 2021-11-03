import List from "../../components/List";
import css from "./BootcamperDashboard.module.css";
import Calendar from "../../components/Calendar";
import Event from "../../components/Event";

export default function BootcamperDashboard({ Listings, name, recordings }) {
  return (
    <div>
      <Event />
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
      <Calendar />
    </div>
  );
}
