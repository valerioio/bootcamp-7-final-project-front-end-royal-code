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
//import { weeksOf2 } from "../../weeks-of-2";
import css from "./BootcamperPairsList.module.css";
import img1 from "../../Images/soc9.jpg";

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
  const [weeksOf2, setWeeksOf2] = useState([{ week: 1, pairs: [["loading"]] }]);

  useEffect(() => {
    async function getGroupData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/bootcamper-pairs"
      );
      const data = await res.json();
      const sortedData = data.sort(function (a, b) {
        return a.week - b.week;
      });
      console.log(sortedData);
      setWeeksOf2(sortedData);
      return data;
    }
    getGroupData();
  }, []);

  return (
    <>
      <h1 className={css.mainTitle}>Cohort 7 Pairs</h1>
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
            {weeksOf2[week.count - 1].pairs.map((pair, i) => {
              return (
                <li key={i + "043"} className={css.pairs}>
                  {pair.map((bootcamper, j) => {
                    return (
                      <div key={i + "043" + j} className={css.bootcamper}>
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
