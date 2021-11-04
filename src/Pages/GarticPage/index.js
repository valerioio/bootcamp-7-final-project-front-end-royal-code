// Plan
// import react
// export default function Gartic Page
// return: title
// link
// main picture
// description
// picture 2
// picture 3?

import React from "react";
import { energisers } from "../../data";
import css from "./GarticPage.module.css";

export default function GarticPage() {
  const gartic = energisers[0];
  return (
    <div>
      <h1 className={css.mainTitle}>{gartic.name}</h1>
      <a className={css.link} href={`${gartic.link}`}>
        Play Gartic
      </a>
      <img src={`${gartic.logo}`} alt="Gartic logo" />
      <p>{gartic.description}</p>
      <img src={`${gartic.bootcamperImage}`} alt="Bootcampers playing Gartic" />
      <img
        src={`${gartic.screenshot}`}
        alt="Screenshot of Gartic being played"
      />
    </div>
  );
}
