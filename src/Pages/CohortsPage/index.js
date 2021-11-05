// plan.
// import react
// export default function Cohort Page
// return:
// image of cohort
// a tag with link to bootcampers page.

import React from "react";
import css from "./CohortsPage.module.css";
import img1 from "../../Images/soc7.jpg";
import img2 from "../../Images/soc8.jpg";
import img3 from "../../Images/soc3.jpg";
import img4 from "../../Images/soc5.jpg";
import img5 from "../../Images/soc1.jpg";
import img6 from "../../Images/soc2.jpg";
import img7 from "../../Images/soc6.jpg";

const cohorts = [img1, img2, img3, img4, img5, img6, img7];

export default function CohortPage() {
  return (
    <main>
      <h1 className={css.mainTitle}>Cohorts</h1>
      <section className={css.main}>
        {cohorts.map((cohort, i) => {
          return (
            <div className={css.cohortTile}>
              <img
                className={css.cohortImage}
                src={cohort}
                alt={`cohort ${i + 1} photo`}
              />
              <a
                className={css.link}
                href={`https://main.d2o20242c1ey75.amplifyapp.com/cohorts/${
                  i + 1
                }/bootcampers`}
              >
                Cohort {i + 1}
              </a>
            </div>
          );
        })}
      </section>
    </main>
  );
}
