import List from "../List";
import css from "./BootcamperDashboard.module.css";

export default function BootcamperDashboard({ Listings, name }) {
  return (
    <div>
      <div className={css.dashboard}>
        <div className={`container`}>
          <h1 className={css.title}>Resource List</h1>
          <List className={css.list} Listings={Listings} />
        </div>
      </div>
    </div>
  );
}
