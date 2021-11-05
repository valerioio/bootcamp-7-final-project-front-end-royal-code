import NavBar from "../NavBar";
import NameIcon from "../NameIcon";
import css from "./Layout.module.css";

const Layout = ({
  children,
  user,
  currentPage,
  color = "white",
  art = false,
}) => {
  return (
    <div className={art ? css.layoutArt : css.layout} style={{ backgroundColor: color}}>
      <NavBar email={user?.email} currentPage={currentPage} />
      <main className={art ? css.mainArt : css.main}>
        <NameIcon name={user?.nickname} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
