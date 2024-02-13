import { useDispatch, useSelector } from "react-redux"
import styles from "./alerts.module.scss"
import { removeAlert } from "../../store/Alerts/Alerts.actions"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookMessenger, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import handleShare from "../../utils/handleShare"
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
} from 'next-share'
import { replaceAmpersand } from "../../utils/replaceAmpersand"



export default function Alerts() {

    const alertsArray = useSelector(state => state.alerts)
    const token = jwt.decode(Cookies.get('auth'))

    const dispatch = useDispatch()

    const [copied, setCopied] = useState(false)


    const handleCopy = (url) => {


        navigator.clipboard.writeText(url);
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 6000)
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


                                    <span className="mx-2 cardAnimation" type="button" >
                                        <Link href={`whatsapp://send?text=${replaceAmpersand(elem.link + "&userId=" + token.sub)}`} target="_blank">
                                            <div className="d-flex justify-content-center">
                                                <div className="btn-round text-light bg-whatsapp d-flex justify-content-center align-items-center">
                                                    <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center mt-1">
                                                <span className={`${styles.small} text-center bold`}>Whatsapp</span>
                                            </div>
                                        </Link>
                                    </span>
                                    <span className="mx-2 cardAnimation" type="button" >
                                        <a href={`fb-messenger://share?link=${replaceAmpersand(elem.link + "&userId=" + token.sub)}`} target="_blank">
                                            <div className="d-flex justify-content-center">
                                                <div className="btn-round text-light bg-facebook d-flex justify-content-center align-items-center">
                                                    <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center mt-1">
                                                <span className={`${styles.small} text-center bold`}>Fecebook<br />Messenger</span>
                                            </div>
                                        </a>
                                    </span>

                                    <span className="mx-2 cardAnimation" type="button" onClick={() => handleCopy(elem.link + "&userId=" + token.sub)}>
                                        <div className="btn-round text-white bg-secondary mx-2 d-flex justify-content-center align-items-center" >
                                            {copied ? <FontAwesomeIcon icon={faCheck} className="icon fadeItem" /> : <FontAwesomeIcon icon={faCopy} className="icon fadeItem" />}
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center mt-1">
                                            <span className={`${styles.small} text-center bold`}>Copiar<br />link</span>
                                        </div>
                                    </span>

                                </div>
                            </div>


                            <button type="button" class="btn-close" aria-label="Close" onClick={() => dispatch(removeAlert(alertsArray, index))}></button>
                        </div>
                    )

                }

                else {
                    return (
                        <div class="alert bg-orange alert-dismissible fade show fadeItem" role="alert" >
                            <span> {elem.message} </span>
                            <button type="button" class="btn-close" aria-label="Close" onClick={() => dispatch(removeAlert(alertsArray, index))}></button>
                        </div>
                    )

                }



            })}


        </div>
    )
}



// const 