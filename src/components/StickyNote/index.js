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
      <textarea
        className={css.noteText}
        onChange={(e) => changeNote(e.target.value)}
        placeholder="add a new note"
        maxLength={56} /* change here to make the notes longer to 80*/
        rows={5} /* change here to make the notes longer to 7*/
      >
        {text}
      </textarea>
    </div>
  );
}
