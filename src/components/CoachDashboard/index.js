import ChakraTable from "../ChakraTable";
import Layout from "../Layout";
import css from "./CoachDashboard.module.css";
import "../../index.css";

function groupParings(bootcampers, size) {
  const groups = [];
  for (let i = 0; i < bootcampers.length; i += size) {
    groups.push (<li> {bootcampers.slice (i, i + size).map (bootcamper => <p>{bootcamper.firstName + " " + bootcamper.lastName}</p>)} </li>)

  }
  return groups;
}
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
        <div className={`${css.container} container`}>
          <h1 className={css.title}>Bootcamper pairings</h1>
          <ul  className={css.list}> {groupParings(bootcampers,2)}</ul>
        </div>
        <div className={`${css.container} container`}>
          <h1 className={css.title}>Bootcamper groups of 4</h1>
          <ul  className={css.list}>
          {groupParings(bootcampers,4)}
          </ul>
        </div>
        <div className={`${css.container} container`}>
          <h1 className={css.title}>Bootcamper groups of 8</h1>
          <ul  className={css.list} > {groupParings(bootcampers, 8)}</ul>
        </div>
      </Layout>
    </div>
  );
}
