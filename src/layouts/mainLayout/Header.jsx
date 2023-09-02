import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div
      className={`${styles.headerPosition} d-flex justify-content-end align-items-center text-light`}
    >
      <div className="d-flex">

        <FontAwesomeIcon icon={faBell} className="text-light icon px-3 " />
        <FontAwesomeIcon icon={faGear} className="text-light icon px-3 me-2" />
      </div>
    </div>
  );
}
