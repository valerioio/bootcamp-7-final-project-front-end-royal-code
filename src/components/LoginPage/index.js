// Plan!
// export default function LoginPage
// renders a title "Login."
// green-coloured div
// Login button
// SoC logo

import React from "react";
import LoginButton from "../LoginButton";
import logo from "../../../public/socLogo.png";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <image src={logo} />
      <h1 className={styles.title}>Login</h1>
      <LoginButton type="button" />
      <div className={styles.banner}></div>
    </div>
  );
}
