import List from "../List";
import Layout from "../Layout";
import css from "./BootcamperDashboard.module.css";

export default function BootcamperDashboard({
  Listings,
}) {
  const navbarLinks = [{linkText: 'Journey', href: '/journey'}, {linkText: 'Journey', href: '/journey'}];
  return (
    <div>
      <Layout>
        <h1 className={css.header}>Resource List</h1>
        <div className={css.header}>
          <List Listings={Listings} />
        </div>
      </Layout>
    </div>
  );
}
