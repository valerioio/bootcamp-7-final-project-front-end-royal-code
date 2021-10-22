import NavBar from "../NavBar";
import NameIcon from "../NameIcon";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <NameIcon />
      {children}
    </>
  );
};

export default Layout;
