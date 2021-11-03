// Plan
// import React.
// import data
// export default component ReadingListPage
// return:
// h1 topic + week
// description
// resource

import React from "react";
import { journeyData } from "../../data";
import css from "./ReadingListPage.module.css";

export default function ReadingListPage() {
  return (
    <>
      <h1 className={css.mainTitle}>Reading List</h1>
      <div className={css.main}>
        {journeyData.map((week) => {
          return (
            <div className={css.data}>
              <h1
                className={css.title}
              >{`Week ${week.week}: ${week.topic}`}</h1>
              {week.description.map((description) => {
                return <p>{description}</p>;
              })}
              {/* <a className={css.link} href={week.link}>
                {week.link}
              </a> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
