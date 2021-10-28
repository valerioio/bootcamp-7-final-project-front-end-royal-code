import css from "./CoachDashboard.module.css";
import "../../index.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
//import List from "../List";

function groupParings(bootcampers, size) {
  const groups = [];
  for (let i = 0; i < bootcampers.length; i += size) {
    groups.push(
      <div key={uuidv4()}>
        <p>
          {size === 2 ? "Pair" : "Group"} {i / size + 1}
        </p>
        <li>
          {" "}
          {bootcampers.slice(i, i + size).map((bootcamper) => (
            <p key={uuidv4()}>
              {bootcamper.firstName + " " + bootcamper.lastName}
            </p>
          ))}{" "}
        </li>
        <br />
      </div>
    );
  }
  return groups;
}
export default function CoachDashboard({
  Listings = null,
  bootcampers,
  name = null,
  energisers,
}) {
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
      <div className={css.dashboard}>
        <div className={`${css.energiser} container`}>
          <h1 className={css.title}>Energiser</h1>
          <button onClick={randomiseEnergiser}>Randomise</button>
          <hr />
          <h4 className={css.energiserName}>
            {energisers[randomEnergiserIndex].name}
          </h4>
          <br />
          <p>{energisers[randomEnergiserIndex].description}</p>
          <br />
          <a
            href={energisers[randomEnergiserIndex].link}
            style={{ color: "blue" }}
          >
            {energisers[randomEnergiserIndex].link}
          </a>
          <br />
        </div>
        <div className={`container`}>
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
        </div>
      </div>
    </div>
  );
}
