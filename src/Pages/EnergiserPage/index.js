// Plan
// import react
// export default function Energiser Page
// return: title
// link
// main picture
// description
// picture 2
// picture 3?

import React, { useEffect, useState } from "react";
//import { energisers } from "../../data";
import css from "./EnergiserPage.module.css";

export default function EnergisersPage({ energiserName }) {
  const [energiser, setEnergiser] = useState([
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

  function getEnergiser(energiserData) {
    return energiserData.find((e) => e.name == energiserName);
  }

  useEffect(() => {
    async function getEnergiserData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/energisers"
      );
      const data = await res.json();
      const energiserData = getEnergiser(data);
      setEnergiser(energiserData);
      return energiserData;
    }
    getEnergiserData();
  }, []);

  //const energiser = energisers[0];
  return (
    <main className={css.body}>
      <header className={css.header}>
        <h1 className={css.mainTitle}>{energiser.name}</h1>{" "}
        <img
          className={css.energiserLogo}
          src={`${energiser.logo}`}
          alt="Energiser logo"
        />
      </header>
      <div className={css.content}>
        <a className={css.link} href={`${energiser.link}`}>
          Play {energiser.name}
        </a>

        <p className={css.energiserDescription}>{energiser.description}</p>

        <img
          className={css.energiserImage}
          src={`${energiser.bootcamperImage}`}
          alt="Bootcampers playing Energiser"
        />

        <img
          className={css.energiserImage}
          src={`${energiser.screenshot}`}
          alt="Screenshot of Energiser being played"
        />
      </div>
    </main>
  );
}
