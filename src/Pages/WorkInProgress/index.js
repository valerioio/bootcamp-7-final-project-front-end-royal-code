import React from "react";
import css from "./WorkInProgress.module.css";

export default function WorkInProgress() {
  return (
    <main className={css.imageContainer}>
      <img
        className={css.image}
        src="http://kinderscientific.com/wp-content/uploads/2018/06/Work-in-Progress.jpg"
        alt="work in progress"
      />
    </main>
  );
}
