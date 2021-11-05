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
    <main className={css.body}>
      <header className={css.header}>
        <h1 className={css.mainTitle}>{gartic.name}</h1>{" "}
        <img className={css.garticLogo}
          src={`${gartic.logo}`}
          alt="Gartic logo"
        />
      </header>
      <div className={css.content}>
       
        <a className={css.link} href={`${gartic.link}`}>
          Play Gartic
        </a>
       
        <p className={css.garticDescription}>{gartic.description}</p>
        
        <img className={css.garticImage}
          src={`${gartic.bootcamperImage}`}
          alt="Bootcampers playing Gartic"
        />
        
        <img className={css.garticImage}
          src={`${gartic.screenshot}`}
          alt="Screenshot of Gartic being played"
        />
      </div>
    </main>
  );
}
