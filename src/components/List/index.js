import ListItem from "../ListItem";
import css from "./List.modules.css";

function List({ Listings }) {
  return (
    <ul className={css.list}>
      {Listings.map((Listing, i) => (
        <ListItem key={`${i}68`} text={Listing} />
      ))}
    </ul>
  );
}

export default List;
