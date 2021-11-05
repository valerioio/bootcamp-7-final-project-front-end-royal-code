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
import Pin from "../Pin";
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
      <div className={css.pin}>
        <Pin />
      </div>
      <button className={css.removeButton} onClick={deleteNote}>
        -
      </button>
      <textarea
        className={css.noteText}
        onChange={(e) => changeNote(e.target.value)}
        placeholder="add a new note"
        maxLength={120}
        rows={8}
        cols={18}
        value={text}
      />
    </div>
  );
}
