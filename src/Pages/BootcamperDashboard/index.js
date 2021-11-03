import List from "../../components/List";
import css from "./BootcamperDashboard.module.css";
import Calendar from "../../components/Calendar";
import PinBoard from "../../components/PinBoard";

export default function BootcamperDashboard({ Listings, name, recordings }) {
  return (
    <div>
      <h1 className={css.mainTitle}>Dashboard</h1>
      <div className={css.dashboard}>
        <PinBoard />
      </div>
      <Calendar />
    </div>
  );
}
