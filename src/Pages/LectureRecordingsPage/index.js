// Plan
// import React.
// import data
// export default component LectureRecordingsPage
// return:
// h1 title
// date
// link

import React, { useState, useEffect } from "react";
//import { recordings } from "../../data";
import css from "./LectureRecordingsPage.module.css";
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

export default function LectureRecordingsPage() {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    async function getEventData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/recordings"
      );
      const data = await res.json();
      const sortedData = data.sort(function (a, b) {
        return a.date.slice(0, 2) - b.date.slice(0, 2);
      });
      setRecordings(sortedData);
      return data;
    }
    getEventData();
  }, []);
  return (
    <>
      <h1 className={css.mainTitle}>Lecture Recordings</h1>
      <div className={css.main}>
        {recordings.map((recording, i) => {
          return (
            <div
              className={css.recordings}
              style={{
                borderColor: borderArr[i],
                backgroundColor: changeOpacity(borderArr[i], 0.1),
              }}
            >
              <h1 className={css.title}>{recording.title}</h1>
              <div className={css.recordingDetails}>
                <p className={css.recordingText}>
                  Date recorded: <strong>{recording.date}</strong>
                </p>

                <a key={i + "951"} className={css.link} href={recording.link}>
                  <img
                    className={css.thumbnail}
                    src={recording.thumbnail}
                    alt="Video thumbnail"
                  />
                  <p className={css.recordingText}>{recording.link}</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
