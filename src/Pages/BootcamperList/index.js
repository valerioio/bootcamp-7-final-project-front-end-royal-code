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
      <section className={css.fakeButtonContainer}>
        <a
          className={css.fakeButton}
          href="https://main.d2o20242c1ey75.amplifyapp.com/cohorts/7/groups-of-2"
        >
          Pairs
        </a>
        <a
          className={css.fakeButton}
          href="https://main.d2o20242c1ey75.amplifyapp.com/cohorts/7/groups-of-4"
        >
          Groups of 4
        </a>
        <a
          className={css.fakeButton}
          href="https://main.d2o20242c1ey75.amplifyapp.com/cohorts/7/groups-of-8"
        >
          Groups of 8
        </a>
      </section>
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