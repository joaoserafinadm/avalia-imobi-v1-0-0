import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss";
import { faBell, faBuilding, faCircleRight, faGear, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import tippy from "tippy.js";
import Notifications from "./components/Notifications";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

export default function Header(props) {

    const token = jwt.decode(Cookies.get('auth'))

    const router = useRouter();

    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        dataFunction(token.sub)
    }, [])


    const hendleSession = async () => {

        Cookies.remove('auth')
        localStorage.removeItem('auth')
        await router.replace('/')
        router.reload()
    }


    const dataFunction = async (user_id) => {

        await axios.get(`${baseUrl()}/api/notifications`, {
            params: {
                user_id: user_id
            }
        })
            .then(res => {
                setNotifications(res.data.data)
            }).catch(e => {
                console.log(e)
            })

    }



    return (
        <div className={`d-flex justify-content-center align-items-center ${styles.header}`}>
            {!props.navbarStatus && (
                <div className="fadeItem">
                    <Link href="/">
                        <div className='d-flex justify-content-center align-items-center ' >
                            <span type='button'>
                                <img src="/LOGO_LIGHT.png" alt="logo" className='' height={50} />
                            </span>
                        </div>
                    </Link>
                </div>
            )}


            <div className={`d-flex ${styles.configIcons}`}>


                <div className={` dropdown`}>
                    <span type="button" className="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faBell} className="text-light icon px-3 " />
                    </span>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownNotification">
                        <Notifications notifications={notifications} />
                    </ul>
                </div>





                <div className={` dropdown `}>
                    <span type="button" className="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faGear} className="text-light icon px-3 me-2" />
                    </span>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                        <small >
                            <li className='mb-1 '>
                                <Link href={`/editProfile/${token.sub}`}>
                                    <a className="dropdown-item text-gray-dark" >
                                        <FontAwesomeIcon icon={faUser} className="me-1 icon" /> Editar perfil
                                    </a>
                                </Link>
                            </li>
                            <li className='my-1'>
                                <Link href="/passwordChange">
                                    <a className="dropdown-item text-gray-dark" >
                                        <FontAwesomeIcon icon={faKey} className="me-1 icon" /> Alterar senha
                                    </a>
                                </Link>
                            </li>
                            <li className='my-1'>
                                <Link href="/companyEdit">
                                    <a className="dropdown-item text-gray-dark" >
                                        <FontAwesomeIcon icon={faBuilding} className="me-1 icon" /> Editar instituição
                                    </a>
                                </Link>
                            </li>
                            <li className='my-1'><hr className='dropdown-divider' /></li>
                            <li className='mt-1'>
                                <a className="dropdown-item text-gray-dark" type='button' onClick={() => hendleSession()}>
                                    <FontAwesomeIcon icon={faCircleRight} className="me-1 icon" /> Sair
                                </a>
                            </li>
                        </small>
                    </ul>
                </div>
            </div>
        </div>
    );
}
