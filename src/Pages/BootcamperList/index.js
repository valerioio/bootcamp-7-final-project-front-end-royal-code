// Plan.
// import React
// import data.
// export default function Bootcamper List.
// return:
// H1 title.
// bootcamper image
// bootcamper names in a tags with hrefs to individual pages.

import React from "react";
import { nameData } from "../../data";
import css from "./BootcamperList.module.css";

export default function BootcamperList({ cohort }) {
  return (
    <>
      <h1 className={css.mainTitle}>Cohort 7</h1>
      <main className={css.main}>
        {nameData.map((bootcamper) => {
          return (
            <div className={css.bootcamper}>
              <img
                className={css.avatar}
                src={bootcamper.bootcamperImage}
                alt={`${bootcamper.firstName} ${bootcamper.lastName} avatar`}
              />
              <a className={css.link} href={bootcamper.link}>
                {bootcamper.firstName} {bootcamper.lastName}
              </a>
            </div>
          );
        })}
      </main>
    </>
  );
}
