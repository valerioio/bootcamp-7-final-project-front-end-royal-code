import List from "../List";
import Input from "../Input";
import ChakraTable from "../ChakraTable";
import LogoutButton from "../LogoutButton";
import Layout from "../Layout";

export default function CoachDashboard({
  addListing,
  Listings,
  bootcampers,
}) {
  console.log(bootcampers);
  return (
    <div>
      <Layout>
        <LogoutButton />
        <Input onData={addListing} />
        <List Listings={Listings} handleDelete={handleDelete} />
        <ChakraTable
          title="Bootcamper Pairs"
          columnHeaders={["Person 1", "Person 2"]}
          data={bootcampers}
        />
      </Layout>
    </div>
  );
}