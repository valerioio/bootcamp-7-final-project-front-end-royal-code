import NavBar from "../NavBar";
import NameIcon from "../NameIcon";
import css from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div class={css.layout}>
      <NavBar/>
      <main className={css.main}>
        <NameIcon />
        {children}
        </main>
    
    </div>
  );
};

export default Layout;
