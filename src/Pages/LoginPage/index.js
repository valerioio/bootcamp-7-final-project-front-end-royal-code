// Plan!
// export default function LoginPage
// renders a title "Login."
// green-coloured div
// Login button
// SoC logo

import React from "react";
import LoginButton from "../../components/LoginButton";
import logo from "../../socLogo.png";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  localStorage.clear();
  return (
    <div className={styles.background}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h1 className={styles.title}>Codely</h1>
      <div className={styles.buttonAlign}>
        <LoginButton className={styles.login} />
      </div>

      <div className={styles.banner}></div>
    </div>
  );
}
