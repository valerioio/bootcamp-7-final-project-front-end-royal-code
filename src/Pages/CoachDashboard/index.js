import css from "./CoachDashboard.module.css";
import "../../index.css";
import { useState, useEffect } from "react";
//import List from "../List";
import PinBoard from "../../components/PinBoard";
// import Calendar from "../../components/Calendar";
//import { eventData } from "../../data";
import Event from "../../components/Event";

// function groupParings(bootcampers, size) {
//   const groups = [];
//   for (let i = 0; i < bootcampers.length; i += size) {
//     groups.push(
//       <div key={`${i}95`}>
//         <p>
//           {size === 2 ? "Pair" : "Group"} {i / size + 1}
//         </p>
//         <li>
//           {" "}
//           {bootcampers.slice(i, i + size).map((bootcamper) => (
//             <p key={`${i}47`}>
//               {bootcamper.firstName + " " + bootcamper.lastName}
//             </p>
//           ))}{" "}
//         </li>
//         <br />
//       </div>
//     );
//   }
//   return groups;
// }
export default function CoachDashboard({ name = null, energisers }) {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    async function getEventData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/events"
      );
      const data = await res.json();
      setEventData(data);
      return data;
    }
    getEventData();
  }, []);

  if (!localStorage.getItem("initialEnergiser")) {
    localStorage.setItem(
      "initialEnergiser",
      Math.floor(Math.random() * energisers.length)
    );
  }
  const [randomEnergiserIndex, setRandomEnergiserIndex] = useState(
    localStorage.getItem("initialEnergiser")
  );
  function randomiseEnergiser() {
    const random = Math.floor(Math.random() * energisers.length);
    localStorage.setItem("initialEnergiser", random);
    setRandomEnergiserIndex(random);
  }
  return (
    <div>
      <h1 className={css.mainTitle}>Welcome Christina</h1>
      <p className={css.subTitle}>{new Date().toDateString()}</p>
      <div className={css.dashboard}>
        <PinBoard user="coach" />
        <div className={css.energiser}>
          <h2 className={css.secondaryTitle}>Today's energiser is:</h2>
          <div className={css.energiserCard}>
            <a
              className={css.energiserName}
              href={energisers[randomEnergiserIndex].link}
            >
              {energisers[randomEnergiserIndex].name}
            </a>
            <button
              className={css.randomiserButton}
              onClick={randomiseEnergiser}
            >
              Randomise
            </button>
          </div>
        </div>
        {/* <Calendar /> */}
        <h2 className={css.secondaryTitle}>Upcoming events</h2>
        <ul>
          {eventData.map((event, i) => (
            <li key={`${i}179`}>
              <Event
                date={new Date(event.date)}
                eventText={event.event.join(",  ")}
              />
            </li>
          ))}
        </ul>
        {/* <div className={`container`}>
          <h1 className={css.title}>Bootcamper pairings</h1>
          <ul className={css.list}> {groupParings(bootcampers, 2)}</ul>
        </div>
        <div className={`container`}>
          <h1 className={css.title}>Bootcamper groups of 4</h1>
          <ul className={css.list}>{groupParings(bootcampers, 4)}</ul>
        </div>
        <div className={`container`}>
          <h1 className={css.title}>Bootcamper groups of 8</h1>
          <ul className={css.list}> {groupParings(bootcampers, 8)}</ul>
        </div> */}
      </div>
    </div>
  );
}
