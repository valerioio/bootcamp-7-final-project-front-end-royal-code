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

export default function GarticPage() {
  console.log(energisers);
  const gartic = energisers[0];
  console.log(gartic);
  return (
    <div>
      <h1>{gartic.name}</h1>
      <a href={`${gartic.link}`}>Play Gartic</a>
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
