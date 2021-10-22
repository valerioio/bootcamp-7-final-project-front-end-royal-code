import List from "../List";
import Input from "../Input";
import ChakraTable from "../ChakraTable";
import LogoutButton from "../LogoutButton";

export default function BootcamperDashboard({
  handleDelete,
  addListing,
  Listings,
  bootcampers,
}) {
  console.log(bootcampers);
  return (
    <div>
      <LogoutButton />
      <Input onData={addListing} />
      <List Listings={Listings} handleDelete={handleDelete} />
      <ChakraTable
        title="Bootcamper Pairs"
        columnHeaders={["Person 1", "Person 2"]}
        data={bootcampers}
      />
      <ChakraTable
        title="Bootcamper groups of 4"
        columnHeaders={["Person 1", "Person 2", "Person 3", "Person 4"]}
        data={bootcampers}
      />
    </div>
  );
}
