import CSS from "./ListItem.module.css";
function ListItem({ text, handleDelete = null }) {
  console.log("ListItem rerender");
  return (
    <li className={CSS.listContainer}>
      <p>"Week: "{text.week}</p>
      <p>"Topic: "{text.topic}</p>
      <p>"Resource: "{text.resource}</p>
      {/*<button onClick={handleDelete}>x</button>*/}
    </li>
  );
}

export default ListItem;
