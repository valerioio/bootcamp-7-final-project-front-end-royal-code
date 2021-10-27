import ListItem from "../ListItem";
import CSS from "./List.modules.css";

function List({ Listings }) {
  return (
    <ul className={CSS.list}>
      {Listings.map((Listing, i) => (
        <ListItem key={i} text={Listing} />
      ))}
    </ul>
  );
}

export default List;
