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
import { motion } from "framer-motion";
import { useRef } from "react";

const COLORS = ["lavenderblush", "honeydew", "lightyellow", "lightcyan"];

export default function StickyNote({ text, deleteNote, changeNote }) {
  console.log(0);
  const [color, setColor] = useState(
    COLORS[Math.floor(Math.random() * COLORS.length)]
  );
  const [zIndex, setZIndex] = useState(0);
  const constraintsRef = useRef(null);
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      dragMomentum={false}
      className={css.stickyNote}
      style={{
        backgroundColor: color,
        zIndex: zIndex,
      }}
    >
      <div className={css.pin}>
        <Pin />
      </div>

      <button
        className={css.removeButton}
        onClick={() => {
          deleteNote();
          setZIndex(-1);
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
      />
    </motion.div>
  );
}
