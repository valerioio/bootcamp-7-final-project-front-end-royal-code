// Plan.
// import React
// import data.
// export default function Bootcamper List.
// return:
// H1 title.
// bootcamper image
// bootcamper names in a tags with hrefs to individual pages.

import React, { useEffect, useState } from "react";
//import { nameData } from "../../data";
import css from "./BootcamperList.module.css";

export default function BootcamperList({ cohort }) {
  const [nameData, setNameData] = useState([]);

  useEffect(() => {
    async function getBootcamperData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/bootcampers"
      );
      const data = await res.json();

      setNameData(data);
      return data;
    }
    getBootcamperData();
  }, []);
  return (
    <>
      <h1 className={css.mainTitle}>Cohort 7</h1>
      <section className={css.fakeButtonContainer}>
        <a className={css.fakeButton} href="groups-of-2">
          Pairs
        </a>
        <a className={css.fakeButton} href="groups-of-4">
          Groups of 4
        </a>
        <a className={css.fakeButton} href="groups-of-8">
          Groups of 8
        </a>
      </section>
      <main className={css.main}>
        {nameData.map((bootcamper, i) => {
          return (
            <div key={i + "350"} className={css.bootcamper}>
              <img
                className={css.avatar}
                src={bootcamper.image}
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
