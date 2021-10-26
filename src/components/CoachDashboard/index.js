import Layout from "../Layout";
import css from "./CoachDashboard.module.css";
import "../../index.css";
import List from "../List";

function groupParings(bootcampers, size) {
  const groups = [];
  for (let i = 0; i < bootcampers.length; i += size) {
    groups.push(
      <>
        <p>
          {size === 2 ? "Pair" : "Group"} {i / size + 1}
        </p>
        <li>
          {" "}
          {bootcampers.slice(i, i + size).map((bootcamper) => (
            <p>{bootcamper.firstName + " " + bootcamper.lastName}</p>
          ))}{" "}
        </li>
        <br />
      </>
    );
  }
  return groups;
}
export default function CoachDashboard({
  addListing,
  Listings,
  bootcampers,
  handleDelete,
  name,
  energisers,
}) {
  const navbarLinks = [
    { linkText: "Dashboard", href: "/home" },
    { linkText: "Energisers", href: "/energisers" },
  ];
  return (
    <div>
      <Layout navbarLinks={navbarLinks} name="Coach">
        <div className={css.dashboard}>
          <div className={`container`}>
            <h1 className={css.title}>Energisers</h1>
            <ul className={css.list}>
              {energisers.map((energiser) => {
                return (
                  <li>
                    <p>{energiser.name}</p>
                    <p>{energiser.description}</p>
                    <p>{energiser.link}</p>
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`container`}>
            <h1 className={css.title}>Bootcamper pairings</h1>
            <ul className={css.list}> {groupParings(bootcampers, 2)}</ul>
          </div>
          <div className={`container`}>
            <h1 className={css.title}>Bootcamper groups of 4</h1>
            <ul className={css.list}>{groupParings(bootcampers, 4)}</ul>
          </div>
          <div className={`container`}>
            <h1 className={css.title}>Bootcamper groups of 8</h1>
            <ul className={css.list}> {groupParings(bootcampers, 8)}</ul>
          </div>
          <div className={`container`}>
            <h1 className={css.title}>Bootcamper groups of 8</h1>
            <ul className={css.list}> {groupParings(bootcampers, 8)}</ul>
          </div>
          <div className={`container`}>
            <h1 className={css.title}>Bootcamper groups of 8</h1>
            <ul className={css.list}> {groupParings(bootcampers, 8)}</ul>
          </div>
          <div className={`container`}>
            <h1 className={css.title}>Bootcamper groups of 8</h1>
            <ul className={css.list}> {groupParings(bootcampers, 8)}</ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
