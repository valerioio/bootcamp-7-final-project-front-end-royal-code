import List from "../List";
import css from "./BootcamperDashboard.module.css";

export default function BootcamperDashboard({ Listings, name, recordings }) {
  return (
    <div>
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
    </div>
  );
}
