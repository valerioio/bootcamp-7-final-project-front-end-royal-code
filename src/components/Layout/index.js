import NavBar from "../NavBar";
import NameIcon from "../NameIcon";
import css from "./Layout.module.css";

const Layout = ({
  children,
  user,
  currentPage,
  color = "white",
  image= 'url("https://i.ibb.co/19xnwCL/bg.jpg")',
  opacity,
}) => {

  return (
    <div
      className={image ? css.layoutImage : css.layout}
      style={{ backgroundColor: color }}
    >
      <NavBar email={user?.email} currentPage={currentPage} />
      <main className={image ? css.mainImage : css.main}>
        <NameIcon name={user?.nickname} />
        {children}
        <div
          className={image ? css.mainImageAfter : null}
          style={image ? { background: image, opacity: opacity || 0.2 } : null}
        ></div>
      </main>
    </div>
  );
};

export default Layout;
