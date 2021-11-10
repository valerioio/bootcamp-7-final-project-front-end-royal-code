// Plan
// import React
// export default function PinBoard.
// return:
// <div></div> with background image as corkboard
// button for add note
// sticky note for each note in list.
// persist list in local storage

import React, { useEffect, useRef, useState } from "react";
import StickyNote from "../StickyNote";
import css from "./PinBoard.module.css";

const SEPARATOR = "|";
const DELETE = "!";
const NOTES = "notes";

export default function PinBoard({ user }) {
  const [notes, setNotes] = useState(
    user === "bootcamper"
      ? [
          "sort VS code autosave",
          "update users table",
          "plan bootcamper party 🎉",
        ]
      : user === "coach"
      ? [
          "edit serverless recordings",
          "pop quiz friday",
          "browser preview vs code extension",
        ]
      : []
  );

  const [coords, setCoords] = useState(null);
  const pinboardRef = useRef();
  useEffect(() => {
    if (!localStorage.getItem(NOTES)) {
      localStorage.setItem(NOTES, notes.join(SEPARATOR));
    } else {
      localStorage.setItem(
        NOTES,
        localStorage.getItem(NOTES).replace(/(\|!)|(!\|)|!/g, "") // DELETE === '!'
      );
    }
    setNotes(localStorage.getItem(NOTES).split(SEPARATOR));
    const boundingClientRect = pinboardRef.current.getBoundingClientRect();
    setCoords({
      left: boundingClientRect.left,
      right: boundingClientRect.right,
      top: boundingClientRect.top,
      bottom: boundingClientRect.bottom,
    });
  }, []);

  // plan for addNote
  // get note text from noteText state
  // add new note text to note array
  // update note state (spread)
  function addNote() {
    const newNotes = [...notes, ""];
    setNotes(newNotes);
    localStorage.setItem(NOTES, newNotes.join(SEPARATOR));
  }

  // plan for deleteNote
  // delete specific note from array
  // update note state (spread and slice)
  function deleteNote(index) {
    changeNote(index, DELETE);
    // const newNotes = [...notes.slice(0, index), ...notes.slice(index + 1)];
    // localStorage.setItem(NOTES, newNotes.join(SEPARATOR));
    // setNotes(newNotes);
  }
  function changeNote(index, noteText) {
    const newNotes = [
      ...notes.slice(0, index),
      noteText,
      ...notes.slice(index + 1),
    ];
    setNotes(newNotes);
    localStorage.setItem(NOTES, newNotes.join(SEPARATOR));
  }

  return (
    <div className={css.pinBoard} ref={pinboardRef}>
      <button className={css.addNoteButton} onClick={addNote}>
        +
      </button>
      {coords
        ? notes.map((note, index) => {
            return (
              <StickyNote
                key={index + "454"}
                text={note}
                deleteNote={() => deleteNote(index)}
                changeNote={(noteText) => changeNote(index, noteText)}
                pinboardCoords={coords}
              />
            );
          })
        : null}
    </div>
  );
}
