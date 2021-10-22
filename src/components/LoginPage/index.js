// Plan!
// export default function LoginPage
// renders a title "Login."
// green-coloured div
// Login button
// SoC logo

import React from "react";
import LoginButton from "../LoginButton";
import logo from "./socLogo.png";
import styles from "./LoginPage.module.css";
import LogoutButton from "../LogoutButton";

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <image src={logo} className={styles.logo} />
      <h1 className={styles.title}>Login.</h1>
      <div className={styles.buttonAlign}>
        <LoginButton className={styles.login} />
      </div>

      <div className={styles.banner}></div>
    </div>
  );
}
