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
import { weeksOf2 } from "../../weeks-of-2";
import css from "./BootcamperPairsList.module.css";

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

export default function BootcamperPairList({ cohort }) {
  const [week, dispatch] = useReducer(reducer, { count: 1 });
  console.log(weeksOf2);
  return (
    <>
      <h1 className={css.mainTitle}>Cohort 7 Pairs</h1>
      <div>
        <button
          className={css.button}
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          Last Week
        </button>
      </div>
      <div className={css.buttonRight}>
        <button
          className={css.button}
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          Next Week
        </button>
      </div>
      <main className={css.main}>
        <h2 className={css.secondaryTitle}>Week {week.count}</h2>
        {weeksOf2[week.count - 1].groups.map((pair) => {
          return (
            <div className={css.pairs}>
              {pair.map((bootcamper) => {
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
      </main>
    </>
  );
}
