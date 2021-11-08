// Plan.
// import React
// import data.
// useReducer for week flick through (increment, decrement)
// export default function Bootcamper List.
// return:
// H1 title.
// bootcamper image
// bootcamper names in a tags with hrefs to individual pages.

import React, { useReducer, useEffect, useState } from "react";
//import { weeksOf4 } from "../../weeks-of-4";
import css from "./BootcamperFoursList.module.css";
import img1 from "../../Images/soc10.jpg";

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
  const [weeksOf4, setWeeksOf4] = useState([
    { week: 1, groups: [["loading"]] },
  ]);

  useEffect(() => {
    async function getGroupData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/bootcamper-fours"
      );
      const data = await res.json();
      const sortedData = data.sort(function (a, b) {
        return a.week - b.week;
      });
      setWeeksOf4(sortedData);
      return data;
    }
    getGroupData();
  }, []);

  return (
    <>
      <h1 className={css.mainTitle}>Cohort 7 Groups of 4</h1>

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
            {weeksOf4[week.count - 1].groups.map((group, i) => {
              return (
                <li key={i + "041"} className={css.pairs}>
                  {group.map((bootcamper, j) => {
                    return (
                      <div key={i + "041" + j} className={css.bootcamper}>
                        <a className={css.link} href={""}>
                          {" "}
                          {/* href={bootcamper.link} <- bootcamper is a string */}
                          {bootcamper}
                        </a>
                      </div>
                    );
                  })}
                </li>
              );
            })}
          </ul>
          <img className={css.image} src={img1} alt="Bootcampers" />
        </div>
      </main>
    </>
  );
}
