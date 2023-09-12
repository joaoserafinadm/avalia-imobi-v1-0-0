import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Toggle.module.scss"
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";

export default function Toggle(props) {

    
    return (
        <div className={`${styles.toggle} ${props.navbarStatus === true ? '': styles.toggleOn}`}>
            <span className={` text-light`} type="button" onClick={()=> props.setNavbarStatus()}>
                {/* <AiOutlineLeft className="" />  */}

                <FontAwesomeIcon icon={faBars} className="fs-5 icon" />
            </span>
        </div>
    );
}
