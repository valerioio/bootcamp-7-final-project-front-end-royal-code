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
        title="Bootcamper List"
        columnHeaders={["First Name", "Last Name"]}
        data={bootcampers}
      />
    </div>
  );
}
