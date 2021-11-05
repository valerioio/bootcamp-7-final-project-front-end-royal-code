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
   <h1 className={css.mainTitle}>{gartic.name}</h1> <img className={css.garticLogo}
        src={`${gartic.logo}`} alt="Gartic logo" />
    <div className={css.content}>
     
     
       
        <br/>
        <br/>
       
        <br/> 
        <a className={css.link} href={`${gartic.link}`}>
          Play Gartic
        </a>
        <br/>
        <p className={css.garticDescription}>{gartic.description}</p>
        <br/>
        <br/>
        <img
          src={`${gartic.bootcamperImage}`}
          alt="Bootcampers playing Gartic"
        />
        <br/>
        <br/>
        <img
          src={`${gartic.screenshot}`}
          alt="Screenshot of Gartic being played"
        />
    
    </div> 
     </main> 
  );
}
