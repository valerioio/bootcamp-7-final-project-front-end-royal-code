import NavBar from "../NavBar";
import Thing from "../Thing";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Thing />
      {children}
    </>
  );
};

export default Layout;
