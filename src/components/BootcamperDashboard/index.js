import List from "../List";
import Input from "../Input";
import ChakraTable from "../ChakraTable";
import LogoutButton from "../LogoutButton";
import Layout from "../Layout";
import css from "./BootcamperDashboard.module.css";

export default function BootcamperDashboard({
  handleDelete,

  Listings,
  bootcampers,
}) {
  console.log(bootcampers);
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
