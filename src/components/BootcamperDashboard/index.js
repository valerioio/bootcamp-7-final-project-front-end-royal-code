import List from "../List";
import Layout from "../Layout";
import css from "./BootcamperDashboard.module.css";

export default function BootcamperDashboard({ Listings, name }) {
  const navbarLinks = [
    { linkText: "Dashboard", href: "/home" },
    { linkText: "Journey", href: "/journey" },
  ];
  return (
    <div>
      <Layout navbarLinks={navbarLinks} name="Bootcamper">
        <div className={css.dashboard}>
          <div className={`container`}>
            <h1 className={css.title}>Resource List</h1>
            <List className={css.list} Listings={Listings} />
          </div>
        </div>
      </Layout>
    </div>
  );
}
