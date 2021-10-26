import List from "../List";
import Layout from "../Layout";
import css from "./BootcamperDashboard.module.css";

export default function BootcamperDashboard({ Listings, name }) {
  const navbarLinks = [
    { linkText: "Dashboard", href: "/" },
    { linkText: "Journey", href: "/journey" },
  ];
  return (
    <div>
      <Layout navbarLinks={navbarLinks} name="Bootcamper">
        <h1 className={css.header}>Resource List</h1>
        <div className={css.header}>
          <List Listings={Listings} />
        </div>
      </Layout>
    </div>
  );
}
