import { useState } from "react";
import CSS from "./Input.module.css"

function Input({ onData }) {
  console.log("Input rerender");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onData(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className={CSS.inputContainer}
        onChange={(e) =>
          console.log("%cinput change event", "color:red") ||
          setText(e.target.value)
        }
        value={text}
        placeholder="Listing..."
      />
      <button>+</button>
    </form>
  );
}

export default Input;