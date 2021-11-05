import css from "./Event.module.css";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Event = ({ date, eventText }) => {
  const [weekDay, monthDate] = [
    weekDays[date.getDay()],
    date.getDate().toString().padStart(2, "0"),
  ];

  return (
    <div className={css.container}>
      <div className={css.date}>
        <div>{weekDay}</div>
        <div className={css.dateNumber}>{monthDate}</div>
      </div>
      <p className={css.eventText}>{eventText}</p>
    </div>
  );
};

export default Event;
