import ListItem from "../ListItem";
import css from "./List.modules.css";

function List({ Listings }) {
  return (
    <ul className={css.list}>
      {Listings.map((Listing, i) => (
        <ListItem key={i} text={Listing} />
      ))}
    </ul>
  );
}

export default List;
