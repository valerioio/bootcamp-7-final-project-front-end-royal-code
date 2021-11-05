import { useState } from "react";
import css from "./Pin.module.css";

const colours = ["red", "green", "blue", "yellow"];

const Pin = ({ handleClick }) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * colours.length));
  return (
    <button
      className={`${css.pin} ${css[colours[index]]}`}
      onClick={handleClick}
    ></button>
  );
};

export default Pin;
