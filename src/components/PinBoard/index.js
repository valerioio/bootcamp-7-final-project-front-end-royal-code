// Plan
// import React
// export default function PinBoard.
// return:
// <div></div> with background image as corkboard
// button for add note
// sticky note for each note in list.
// persist list in local storage

import React, { useState } from "react";
import StickyNote from "../StickyNote";
import css from "./PinBoard.module.css";

export default function PinBoard() {
  const [notes, setNotes] = useState([
    "here is a test note",
    "here is another note",
    "and another",
    "and another",
    "and another",
  ]);
  const [noteText, setNoteText] = useState("");

  // plan for addNote
  // get note text from noteText state
  // add new note text to note array
  // update note state (spread)
  function addNote() {
    return (
      <div className={css.stickyNote}>
        <input className={css.noteInput} type="text"></input>
        <button
          className={css.submitNoteButton}
          onClick={setNotes([...notes, noteText])}
        >
          Add Note
        </button>
      </div>
    );
  }

  // plan for deleteNote
  // delete specific note from array
  // update note state (spread and slice)
  function deleteNote(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
  }

  return (
    <div className={css.pinBoard}>
      <button className={css.addNoteButton} onClick={addNote}>
        +
      </button>
      {notes.map((note) => {
        return <StickyNote text={note} deleteNote={deleteNote} />;
      })}
    </div>
  );
}