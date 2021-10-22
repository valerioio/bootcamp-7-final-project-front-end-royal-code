import List from "../List";
import Input from "../Input";
import ChakraTable from "../ChakraTable";
import LogoutButton from "../LogoutButton";
import Layout from "../Layout";
import css from "./CoachDashboard.module.css";

export default function CoachDashboard({
  addListing,
  Listings,
  bootcampers,
  handleDelete,
}) {
  console.log(bootcampers);
  return (
    <div>
      <Layout>
        <h1 className={css.header}>Bootcamper pairings</h1>
        <div className={css.header}>
          <ChakraTable
            className={css.tablecontainer}
            title=""
            columnHeaders={["Person 1", "Person 2"]}
            data={bootcampers}
          />
        </div>
        <h1 className={css.header}>Bootcamper groups of 4</h1>
        <div className={css.header}>
          <ChakraTable
            className={css.tablecontainer}
            title=""
            columnHeaders={["Person 1", "Person 2", "Person 3", "Person 4"]}
            data={bootcampers}
          />
        </div>
        <h1 className={css.header}>Bootcamper groups of 8</h1>
        <div className={css.header}>
          <ChakraTable
            className={css.tablecontainer}
            title=""
            columnHeaders={[
              "Person 1",
              "Person 2",
              "Person 3",
              "Person 4",
              "Person 5",
              "Person 6",
              "Person 7",
              "Person 8",
            ]}
            data={bootcampers}
          />
        </div>
      </Layout>
    </div>
  );
}
