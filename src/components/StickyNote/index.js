// Plan
// import react
// export default function StickyNote
// take in text, delete, add.
// return
// <div></div>
// text field with note
// button to delete note

import React, { useEffect, useState } from "react";
import css from "./StickyNote.module.css";
import Pin from "../Pin";
import { motion } from "framer-motion";
import { useRef } from "react";

const COLORS = ["lavenderblush", "honeydew", "lightyellow", "lightcyan"];

export default function StickyNote({
  text,
  deleteNote,
  changeNote,
  pinboardCoords,
}) {
  const [color, setColor] = useState(
    COLORS[Math.floor(Math.random() * COLORS.length)]
  );
  const [constraints, setConstraints] = useState();
  const [display, setDisplay] = useState(true);
  const noteRef = useRef();
  useEffect(() => {
    const coords = noteRef.current.getBoundingClientRect();
    setConstraints({
      left: pinboardCoords.left - coords.left,
      right: pinboardCoords.right - coords.right,
      top: pinboardCoords.top - coords.top,
      bottom: pinboardCoords.bottom - coords.bottom,
    });
  }, []);
  return (
    <motion.div
      ref={noteRef}
      drag
      whileDrag={{ scale: 1.2 }}
      dragConstraints={constraints}
      // dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      dragMomentum={false}
      className={css.stickyNote}
      style={{
        backgroundColor: color,
        zIndex: display ? 0 : -1,
        opacity: display ? 1 : 0,
        cursor: display ? "pointer" : "default",
      }}
    >
      <div className={css.pin}>
        <Pin />
      </div>

      <button
        className={css.removeButton}
        onClick={() => {
          deleteNote();
          setDisplay(false);
        }}
      >
        x
      </button>
      <textarea
        className={css.noteText}
        onChange={(e) => changeNote(e.target.value)}
        placeholder="add a new note"
        maxLength={120}
        rows={8}
        cols={18}
        value={text}
        style={{
          cursor: display ? "text" : "default",
        }}
      />
    </motion.div>
  );
}
