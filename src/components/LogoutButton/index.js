import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./LogoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className={css.Button}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
