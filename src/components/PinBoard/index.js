// Plan
// import React
// export default function PinBoard.
// return:
// <div></div> with background image as corkboard
// button for add note
// sticky note for each note in list.
// persist list in local storage

import React, { useEffect, useState } from "react";
import StickyNote from "../StickyNote";
import css from "./PinBoard.module.css";

const SEPARATOR = "|";
const NOTES = "notes";

export default function PinBoard() {
  const [notes, setNotes] = useState([
    "here is a test note",
    "here is another note",
    "and another",
    "and another",
    "and another",
  ]);
  // const [noteText, setNoteText] = useState("");
  useEffect(() => {
    if (!localStorage.getItem(NOTES)) {
      localStorage.setItem(NOTES, notes.join(SEPARATOR));
    }
    setNotes(localStorage.getItem(NOTES).split(SEPARATOR));
  }, []);

  // plan for addNote
  // get note text from noteText state
  // add new note text to note array
  // update note state (spread)
  function addNote() {
    const newNotes = [...notes, ""];
    localStorage.setItem(NOTES, newNotes.join(SEPARATOR));
    setNotes(newNotes);
    // return (
    //   <div className={css.stickyNote}>
    //     <input className={css.noteInput} type="text"></input>
    //     <button
    //       className={css.submitNoteButton}
    //       onClick={setNotes([...notes, noteText])}
    //     >
    //       Add Note
    //     </button>
    //   </div>
    // );
  }

  // plan for deleteNote
  // delete specific note from array
  // update note state (spread and slice)
  function deleteNote(index) {
    const newNotes = [...notes.slice(0, index), ...notes.slice(index + 1)];
    localStorage.setItem(NOTES, newNotes.join(SEPARATOR));
    setNotes(newNotes);
  }

  function changeNote(index, noteText) {
    const newNotes = [
      ...notes.slice(0, index),
      noteText,
      ...notes.slice(index + 1),
    ];
    localStorage.setItem(NOTES, newNotes.join(SEPARATOR));
    setNotes(newNotes);
  }

  return (
    <div className={css.pinBoard}>
      <button className={css.addNoteButton} onClick={addNote}>
        +
      </button>
      {notes.map((note, index) => {
        return (
          <StickyNote
            text={note}
            deleteNote={() => deleteNote(index)}
            changeNote={(noteText) => changeNote(index, noteText)}
          />
        );
      })}
    </div>
  );
}
