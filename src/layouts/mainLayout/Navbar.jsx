import Logo from "./components/Logo";
import Toggle from "./components/Toggle";
import styles from "./Navbar.module.scss";

export default function Nav(props) {
  return (
    <div className={`${styles.nav} shadow`}>
      <Logo />
      <Toggle />
    </div>
  );
}
