import NavBar from "../NavBar";
import NameIcon from "../NameIcon";
import css from "./Layout.module.css";

const Layout = ({ children, navbarLinks, name }) => {
  return (
    <div class={css.layout}>
      <NavBar navbarLinks={navbarLinks} />
      <main className={css.main}>
        <NameIcon name={name} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
