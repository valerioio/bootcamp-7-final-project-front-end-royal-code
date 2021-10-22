import List from "../List";
import Input from "../Input";
import ChakraTable from "../ChakraTable";
import LogoutButton from "../LogoutButton";
import Layout from "../Layout";
import css from "./CoachDashboard.module.css"

export default function CoachDashboard({
  addListing,
  Listings,
  bootcampers,
  handleDelete,
}) {
  console.log(bootcampers);
  return (
    <div >
      <Layout>
        <ChakraTable
          title="Bootcamper Pairs"
          columnHeaders={["Person 1", "Person 2"]}
          data={bootcampers}
        />
      </Layout>
    </div>
  );
}