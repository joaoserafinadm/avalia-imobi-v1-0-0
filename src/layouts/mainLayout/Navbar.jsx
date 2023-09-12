import { useState } from "react";
import Logo from "./components/Logo";
import Toggle from "./components/Toggle";
import styles from "./Navbar.module.scss";

export default function Nav(props) {



  return (
    <div
      className={`${styles.menuArea} shadow`}>
      <Toggle navbarStatus={props.navbarStatus} setNavbarStatus={() => props.setNavbarStatus()} />
      <Logo />
    </div>
  );
}
