// plan.
// import react
// export default function Cohort Page
// return:
// image of cohort
// a tag with link to bootcampers page.

import React from "react";
import css from "./CohortsPage.module.css";

const cohorts = ["img1", "img2", "img3", "img4", "img5", "img6", "img7"];

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
                src={cohort.image}
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
