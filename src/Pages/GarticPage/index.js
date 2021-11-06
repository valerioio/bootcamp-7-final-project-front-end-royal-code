// Plan
// import react
// export default function Gartic Page
// return: title
// link
// main picture
// description
// picture 2
// picture 3?

import React, { useEffect, useState } from "react";
//import { energisers } from "../../data";
import css from "./GarticPage.module.css";

export default function GarticPage() {
  const [gartic, setGartic] = useState([
    {
      screenshot: "",
      createdAt: "",
      link: "",
      description: "",
      logo: "",
      bootcamperImage: "",
      id: "",
      name: "Loading",
      color: "",
    },
  ]);

  function getGartic(energiserData) {
    let gartic;
    energiserData.forEach((energiser) => {
      if (energiser.name === "Gartic") {
        gartic = energiser;
      }
    });
    return gartic;
  }

  useEffect(() => {
    async function getGarticData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/energisers"
      );
      const data = await res.json();
      const garticData = getGartic(data);
      setGartic(garticData);
      return garticData;
    }
    getGarticData();
  }, []);

  //const gartic = energisers[0];
  return (
    <main className={css.body}>
      <header className={css.header}>
        <h1 className={css.mainTitle}>{gartic.name}</h1>{" "}
        <img
          className={css.garticLogo}
          src={`${gartic.logo}`}
          alt="Gartic logo"
        />
      </header>
      <div className={css.content}>
        <a className={css.link} href={`${gartic.link}`}>
          Play Gartic
        </a>

        <p className={css.garticDescription}>{gartic.description}</p>

        <img
          className={css.garticImage}
          src={`${gartic.bootcamperImage}`}
          alt="Bootcampers playing Gartic"
        />

        <img
          className={css.garticImage}
          src={`${gartic.screenshot}`}
          alt="Screenshot of Gartic being played"
        />
      </div>
    </main>
  );
}
