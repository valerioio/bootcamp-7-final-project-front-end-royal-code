// Plan
// import React.
// import data
// export default component LectureRecordingsPage
// return:
// h1 title
// date
// link

import React from "react";
import { recordings } from "../../data";
import css from "./LectureRecordingsPage.module.css";

export default function LectureRecordingsPage() {
  return (
    <>
      <h1 className={css.mainTitle}>Lecture Recordings</h1>
      <div className={css.main}>
        {recordings.map((recording) => {
          return (
            <div className={css.recordingDetails}>
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
