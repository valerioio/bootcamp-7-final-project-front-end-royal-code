import CSS from "./ListItem.module.css";

function ListItem({ text }) {
  return (
    <li className={CSS.listContainer}>
      <p>Week: {text.week}</p>
      <p>Topic: {text.topic}</p>
      <p>Resource: {text.resource}</p>
    </li>
  );
}

export default ListItem;
