// Plan
// import react
// export default function StickyNote
// take in text, delete, add.
// return
// <div></div>
// text field with note
// button to delete note

// to do
// https://kookma.github.io/TW-Pinboard/
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
// random background color
// drag and drop
// fix text area size
// fix text area onChange
// include pin
// have the border of the text area invisible


import React from "react";
import css from "./StickyNote.module.css";
const colors = ["lavenderblush"];
export default function StickyNote({ text, deleteNote, changeNote }) {
  return (
    <div
      className={css.stickyNote}
      // style={{
      //   backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      // }}
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
