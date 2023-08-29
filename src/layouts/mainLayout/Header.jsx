import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div
      className={`${styles.headerPosition} d-flex justify-content-end align-items-center`}
    >
      <div className="">
        <span className="mx-3">
          <FontAwesomeIcon icon={faBell} className="text-light" />
        </span>
        <span className="mx-3">
          <FontAwesomeIcon icon={faGear} className="text-light" />dsads
        </span>
      </div>
    </div>
  );
}
