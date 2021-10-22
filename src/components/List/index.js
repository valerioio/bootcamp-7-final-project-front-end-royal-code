import ListItem from "../ListItem";
import CSS from "./List.modules.css";

function List({ Listings, handleDelete = null }) {
  console.log("List rerender");
  return (
    <ul className={CSS.list}>
      {Listings.map((Listing, i) => (
        <ListItem key={i} text={Listing} handleDelete={() => handleDelete(i)} />
      ))}
    </ul>
  );
}

export default List;
