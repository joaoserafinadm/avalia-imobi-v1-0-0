import { useDispatch, useSelector } from "react-redux"
import styles from "./alerts.module.scss"
import { removeAlert } from "../../store/Alerts/Alerts.actions"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookMessenger, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import handleShare from "../../utils/handleShare"

import {
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
} from 'next-share'


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

                                    {/* <span className="mx-3" type="button" onClick={() =>handleShare("whatsapp")}>
                                        <div className="d-flex justify-content-center">
                                            <div className="btn-round text-light bg-whatsapp d-flex justify-content-center align-items-center">
                                                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <span className={`${styles.small}`}>Whatsapp</span>
                                        </div>
                                    </span> */}


                                    <WhatsappShareButton
                                        url={elem.link}
                                        title={'Cadastro do imóvel - Avalia Imobi'}
                                        separator=":: "
                                    >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>

                                    <FacebookMessengerShareButton
                                        url={'https://github.com/next-share'}
                                        appId={''}
                                    >
                                        <FacebookMessengerIcon size={32} round />
                                    </FacebookMessengerShareButton>



                                    {/* <span className="mx-2" type="button" >
                                        <Link href={`whatsapp://send?text=${elem.link}`} target="_blank">
                                            <div className="d-flex justify-content-center">
                                                <div className="btn-round text-light bg-whatsapp d-flex justify-content-center align-items-center">
                                                    <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span className={`${styles.small}`}>Whatsapp</span>
                                            </div>
                                        </Link>
                                    </span>
                                    <span className="mx-2" type="button" >
                                        <Link href={`fb-messenger://share/?link=${elem.link}`} target="_blank">
                                            <div className="d-flex justify-content-center">
                                                <div className="btn-round text-light bg-facebook d-flex justify-content-center align-items-center">
                                                    <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <span className={`${styles.small}`}>Fecebook Messenger</span>
                                            </div>
                                        </Link>
                                    </span> */}







                                    {/* <div className="text-center mx-4">
                                        <Link href={`whatsapp://send?text=${elem.link}`} target="_blank">
                                            <div className="btn-round text-white bg-whatsapp  d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faWhatsapp} className="icon" /></div>
                                        </Link>
                                        <span className={`${styles.small}`}>Whatsapp</span>
                                    </div>
                                    <Link href={`instagram://send?text=${elem.link}`} target="_blank">
                                        <div className="btn-round text-white bg-instagram mx-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faInstagram} className="icon" /></div>
                                    </Link>
                                    <Link href={`fb-messenger://send?text=${elem.link}`} target="_blank">
                                        <div className="btn-round text-white bg-facebook mx-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faFacebookMessenger} className="icon" /></div>
                                    </Link>

                                    <div className="btn-round text-white bg-secondary mx-2 d-flex justify-content-center align-items-center" onClick={() => handleCopy(elem.link)}>{copied ? <FontAwesomeIcon icon={faCheck} className="icon text-success" /> : <FontAwesomeIcon icon={faCopy} className="icon" />}</div> */}


                                </div>
                            </div>


                            <button type="button" class="btn-close" aria-label="Close" onClick={() => dispatch(removeAlert(alertsArray, index))}></button>
                        </div>
                    )

                }

            })}


        </div>
    )
}



// const 