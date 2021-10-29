import CSS from "./ListItem.module.css";

function ListItem({ text }) {
  const keys = Object.keys(text);
  const capsKeys = [];
  for (let i = 0; i < keys.length; i++) {
    capsKeys[i] = keys[i].charAt(0).toUpperCase() + keys[i].slice(1);
  }
  return (
    <>
      <li className={CSS.listContainer}>
        {keys.map((key, i) => {
          return (
            <p>
              {capsKeys[i]}: {text[key]}
            </p>
          );
        })}
      </li>
      <br />
    </>
  );
}

export default ListItem;
