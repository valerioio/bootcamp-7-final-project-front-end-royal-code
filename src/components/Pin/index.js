import css from "./Pin.module.css";

const colours = ["red", "green", "blue"];

const Pin = ({ handleClick }) => {
  return (
    <button
      className={`${css.pin} ${css[colours[Math.floor(Math.random() * colours.length)]]}`}
      onClick={handleClick}
    ></button>
  );
};

export default Pin;
