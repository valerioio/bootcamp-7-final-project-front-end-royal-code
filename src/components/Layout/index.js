import NavBar from "../NavBar";
import NameIcon from "../NameIcon";
import css from "./Layout.module.css";

const Layout = ({ children, user, currentPage }) => {
  return (
    <div className={css.layout}>
      <NavBar email={user?.email} currentPage={currentPage} />
      <main className={css.main}>
        <NameIcon name={user?.nickname} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
