import NavBar from "../NavBar";
import NameIcon from "../NameIcon";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar>
        <NameIcon />
        {children}
      </NavBar>
    </>
  );
};

export default Layout;
