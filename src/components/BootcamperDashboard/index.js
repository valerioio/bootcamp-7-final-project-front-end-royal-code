import List from "../List";
import css from "./BootcamperDashboard.module.css";
import Calendar from "../Calendar";

export default function BootcamperDashboard({ Listings, name, recordings }) {
  return (
    <div>
      <h1 className={css.mainTitle}>ASDFG</h1>
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
