// Plan
// import react
// export default function StickyNote
// take in text, delete, add.
// return
// <div></div>
// text field with note
// button to delete note

import React, { useState } from "react";
import css from "./StickyNote.module.css";
const COLORS = ["lavenderblush", "honeydew", "lightyellow", "lightcyan"];

export default function StickyNote({ text, deleteNote, changeNote }) {
  const [color, setColor] = useState(
    COLORS[Math.floor(Math.random() * COLORS.length)]
  );
  return (
    <div
      className={css.stickyNote}
      style={{
        backgroundColor: color,
      }}
    >
      <button className={css.removeButton} onClick={deleteNote}>
        -
      </button>
      {/* <p className={css.noteText}>{text}</p> */}
      <textarea
        className={css.noteText}
        onChange={(e) => changeNote(e.target.value)}
        placeholder="add a new note"
      >
        {text}
      </textarea>
    </div>
  );
}
