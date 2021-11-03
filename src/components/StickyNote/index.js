// Plan
// import react
// export default function StickyNote
// take in text, delete, add.
// return
// <div></div>
// text field with note
// button to delete note

import React from "react";
import css from "./StickyNote.module.css";

export default function StickyNote({ text, deleteNote }) {
  return (
    <div className={css.stickyNote}>
      <button className={css.removeButton} onClick={deleteNote}>
        -
      </button>
      <p className={css.noteText}>{text}</p>
    </div>
  );
}
