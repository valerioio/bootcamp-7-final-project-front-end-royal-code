import NavBar from "../NavBar";
import NameIcon from "../NameIcon";
import css from "./Layout.module.css";

const Layout = ({ children, user }) => {
  console.log("user", user?.email);
  return (
    <div className={css.layout}>
      <NavBar email={user?.email} />
      <main className={css.main}>
        <NameIcon name={user?.nickname} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
