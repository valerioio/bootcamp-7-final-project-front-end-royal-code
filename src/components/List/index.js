import ListItem from "../ListItem";

function List({ Listings, handleDelete }) {
  console.log("List rerender");
  return (
    <ul>
      {Listings.map((Listing, i) => (
        <ListItem key={i} text={Listing} handleDelete={() => handleDelete(i)} />
      ))}
    </ul>
  );
}

export default List;