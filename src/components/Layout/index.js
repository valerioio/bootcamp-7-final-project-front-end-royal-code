import NavBar from "../NavBar";
import NameIcon from "../NameIcon";
import css from "./Layout.module.css";

const Layout = ({
  children,
  user,
  currentPage,
  // color = "white",
  image= 'url("https://i.ibb.co/z7MgkTf/triangle-mosaic.png")',
  opacity,
}) => {

  return (
    <div
      className={image ? css.layoutImage : css.layout}
      // style={{ backgroundColor: color }}
    >
      <NavBar email={user?.email} currentPage={currentPage} />
      <main className={image ? css.mainImage : css.main}>
        <NameIcon name={user?.nickname} />
        {children}
        <div
          className={image ? css.mainImageAfter : null}
          style={image ? { background: image, opacity: opacity || 1 } : null}
        ></div>
      </main>
    </div>
  );
};

export default Layout;
