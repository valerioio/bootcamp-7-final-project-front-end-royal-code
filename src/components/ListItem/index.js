import CSS from "./ListItem.module.css"
function ListItem({ text, handleDelete }) {
    console.log("ListItem rerender");
    return (
      <li className= {CSS.listContainer}>
        {text} <button onClick={handleDelete}>x</button>
      </li>
    );
  }
  
  export default ListItem;
  