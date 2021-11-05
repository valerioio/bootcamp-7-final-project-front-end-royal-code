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
      console.log(sortedData);
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
            <div key={i + "951"} className={css.recordingDetails}>
              <h1 className={css.title}>{recording.title}</h1>
              <p>{recording.date}</p>
              <a className={css.link} href={recording.link}>
                {recording.link}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
