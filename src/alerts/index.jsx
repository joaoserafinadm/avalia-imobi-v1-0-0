import { useDispatch, useSelector } from "react-redux"
import styles from "./alerts.module.scss"
import { removeAlert } from "../../store/Alerts/Alerts.actions"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookMessenger, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


export default function Alerts() {

    const alertsArray = useSelector(state => state.alerts)

    const dispatch = useDispatch()

    const [copied, setCopied] = useState(false)


    const handleCopy = (value) => {
        navigator.clipboard.writeText(value);
        setCopied(true)
    }

    return (
        <div className={`${styles.alertsPosition}`}>
            {alertsArray.map((elem, index, array) => {

                if (elem.type === 'addUserLink') {

                    return (
                        <div class="alert bg-orange alert-dismissible fade show fadeItem" role="alert" >
                            <span> {elem.message} </span>
                            <hr />
                            <div className="row">
                                <div className="col-12 d-flex">
                                    <Link href={`whatsapp://send?text=${elem.link}`} target="_blank">
                                        <div className="btn-round text-white bg-whatsapp mx-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faWhatsapp} className="icon" /></div>
                                    </Link>
                                    <Link href={`instagram://send?text=${elem.link}`} target="_blank">
                                        <div className="btn-round text-white bg-instagram mx-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faInstagram} className="icon" /></div>
                                    </Link>
                                    <Link href={`fb-messenger://send?text=${elem.link}`} target="_blank">
                                        <div className="btn-round text-white bg-facebook mx-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faFacebookMessenger} className="icon" /></div>
                                    </Link>
                                    
                                    <div className="btn-round text-white bg-secondary mx-2 d-flex justify-content-center align-items-center" onClick={() => handleCopy(elem.link)}>{copied ? <FontAwesomeIcon icon={faCheck} className="icon" /> : <FontAwesomeIcon icon={faCopy} className="icon" />}</div>


                                </div>
                            </div>

                            <Link href={`whatsapp://send?text="${elem.link}"`} target="_blank">
                                <p>{elem.link}</p>
                            </Link>
                            <button type="button" class="btn-close" aria-label="Close" onClick={() => dispatch(removeAlert(alertsArray, index))}></button>
                        </div>
                    )

                }

            })}


        </div>
    )
}



// const 