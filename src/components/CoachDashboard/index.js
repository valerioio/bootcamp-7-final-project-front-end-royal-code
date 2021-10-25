import ChakraTable from "../ChakraTable";
import Layout from "../Layout";
import css from "./CoachDashboard.module.css";
import "../../index.css";

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
        <div className={`${css.header} container`}>
          <h1 className={css.tableTitle}>Bootcamper pairings</h1>
          <ChakraTable
            className={css.tablecontainer}
            title=""
            columnHeaders={["Person 1", "Person 2"]}
            data={bootcampers}
          />
        </div>
        <div className={`${css.header} container`}>
          <h1 className={css.tableTitle}>Bootcamper groups of 4</h1>
          <ChakraTable
            className={css.tablecontainer}
            title=""
            columnHeaders={["Person 1", "Person 2", "Person 3", "Person 4"]}
            data={bootcampers}
          />
        </div>
        <div className={`${css.header} container`}>
          <h1 className={css.tableTitle}>Bootcamper groups of 8</h1>
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
