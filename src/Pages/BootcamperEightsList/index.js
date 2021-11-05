// Plan.
// import React
// import data.
// useReducer for week flick through (increment, decrement)
// export default function Bootcamper List.
// return:
// H1 title.
// bootcamper image
// bootcamper names in a tags with hrefs to individual pages.

import React, { useReducer } from "react";
import { weeksOf8 } from "../../weeks-of-8";
import css from "./BootcamperEightsList.module.css";
import img1 from "../../Images/soc12.jpg";

function reducer(week, action) {
  switch (action.type) {
    case "increment":
      return { count: week.count + 1 };
    case "decrement":
      return { count: week.count - 1 };
    default:
      throw new Error();
  }
}

export default function BootcamperFourList({ cohort }) {
  const [week, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <>
      <h1 className={css.mainTitle}>Cohort 7 Groups of 8</h1>
      <button
        className={css.button}
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Last Week
      </button>
      <button
        className={`${css.buttonRight} ${css.button}`}
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Next Week
      </button>
      <main className={css.main}>
        <h2 className={css.secondaryTitle}>Week {week.count}</h2>
        <div className={css.content}>
          <ul className={css.bootcampersList}>
            {weeksOf8[week.count - 1].groups.map((group) => {
              return (
                <div className={css.pairs}>
                  {group.map((bootcamper) => {
                    return (
                      <div className={css.bootcamper}>
                        <a className={css.link} href={bootcamper.link}>
                          {bootcamper}
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </ul>
          <img className={css.image} src={img1} alt="Bootcampers" />
        </div>
      </main>
    </>
  );
}
