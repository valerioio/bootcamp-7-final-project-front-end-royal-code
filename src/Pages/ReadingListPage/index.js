// Plan
// import React.
// import data
// export default component ReadingListPage
// return:
// h1 topic + week
// description
// resource

import React, { useState, useEffect } from "react";
//import { journeyData } from "../../data";
import css from "./ReadingListPage.module.css";
import changeOpacity from "../../helpers/colors";

let borderArr = [
  "#FFADAD",
  "#FFD6A5",
  "#CAFFBF",
  "#9BF6FF",
  "#A0C4FF",
  "#BDB2FF",
  "#FFC6FF",
  "#FFAFCC",
  "#FFADAD",
  "#FFD6A5",
  "#CAFFBF",
  "#9BF6FF",
  "#A0C4FF",
  "#BDB2FF",
  "#FFC6FF",
  "#FFAFCC",
  "#FFADAD",
  "#FFD6A5",
];

export default function ReadingListPage() {
  const [journeyData, setJourneyData] = useState([
    {
      week: "1",
      topic: "loading",
      link: "",
      thumbnail: "",
      description: [""],
    },
  ]);

  useEffect(() => {
    async function getGroupData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/resources"
      );
      const data = await res.json();
      const sortedData = data.sort(function (a, b) {
        return a.week - b.week;
      });
      setJourneyData(sortedData);
      return data;
    }
    getGroupData();
  }, []);

  return (
    <>
      <h1 className={css.mainTitle}>Reading List</h1>
      <div className={css.main}>
        {journeyData.map((week, i) => {
          return (
            <div
              key={i + "749"}
              className={css.data}
              // style={{ borderColor: borderArr[i] }}
              style={{
                borderColor: borderArr[i],
                backgroundColor: changeOpacity(borderArr[i], 0.1),
              }}
            >
              <h1
                className={css.title}
              >{`Week ${week.week}: ${week.topic}`}</h1>
              {week.description.map((description, j) => {
                return (
                  <p key={j + "749" + i} className={css.description}>
                    {description}
                  </p>
                );
              })}
              <img
                className={css.thumbnail}
                src={week.thumbnail}
                alt="Video thumbnail"
              />
              <a className={css.link} href={week.link}>
                {week.link}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
