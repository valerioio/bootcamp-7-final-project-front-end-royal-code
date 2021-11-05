import css from "./Event.module.css";
import eventData from "../../data";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Event = ({ date, eventText, key }) => {
  console.log(date);
  const [weekDay, monthDate] = [
    weekDays[date.getDay()],
    date.getDate().toString().padStart(2, "0"),
  ];

  return (
    <div key={key} className={css.container}>
      <div className={css.date}>
        <div>{weekDay}</div>
        <div className={css.dateNumber}>{monthDate}</div>
      </div>
      <p className={css.eventText}>{eventText}</p>
    </div>
  );
};

export default Event;
