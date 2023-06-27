import styles from '../../../styles/Login.module.scss'

import Link from 'next/link'
import Head from 'next/head'

import { reset } from '../../../store/InventoryList/InventoryList.actions'
import baseUrl from '../../../utils/baseUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Login(props) {

    return (

        <div className={`${styles.container} container-fluid`}>

            <Head>
                <title>AKVO</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="icon" href="favicon.ico" />
            </Head>



            <div className={`row justify-content-center align-items-center ${styles.login_modal} `} >


                <div className={`${styles.login_modal_width} ${styles.fadeItem} text-center`}>
                    <div className="row mb-5 mt-5">
                        <div className="col-12">
                            <img src="logo1.png" className={styles.img} alt="Akvo logo" />
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <p className={`text-center ${styles.p} text-light fs-6`} >&mdash; Aplicativo disponível em breve! &mdash;</p>
                        </div>
                    </div>
                    <div className="row mx-5 mb-5">
                        <div className="col-4">
                            <a href="https://www.instagram.com/akvoesg/">
                                <FontAwesomeIcon icon={faInstagram} className="text-light fs-1" />
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/akvoesg">
                                <FontAwesomeIcon icon={faFacebook} className="text-light fs-1" />
                            </a>
                        </div>
                        <div className="col-4">
                            <a href="https://www.linkedin.com/company/akvoesg/">
                                <FontAwesomeIcon icon={faLinkedin} className="text-light fs-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}