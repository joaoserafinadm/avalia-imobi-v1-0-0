import { useState, useContext } from "react";
import Logo from "./components/Logo";
import Toggle from "./components/Toggle";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import Scrollbars from "react-custom-scrollbars-2";
import { Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { AccordionContext } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faGear, faHome } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Nav(props) {

    const token = jwt.decode(Cookies.get("auth"));

    const router = useRouter()




    function ContextAwareToggle({ children, eventKey, callback }) {
        const { activeEventKey } = useContext(AccordionContext);

        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey)
        );

        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <span
                className="font-weight-bold btn-toggle"
                type="button"
                onClick={decoratedOnClick}
                collapsed={isCurrentEventKey ? "true" : "false"}
            >
                <div className="row align-items-center">{children}</div>
            </span>
        );
    }



    return (
        <div
            className={`${styles.menuArea} shadow`}>
            <Toggle />
            <Logo />
            <div className=" row align-items-center mt-4 mb-2 fadeItem">
                <div className="col">

                    <div className="row align-items-center">
                        <Link href={`/editProfile`}>
                            <div className="d-flex justify-content-center">
                                <span type="button">
                                    <img
                                        src={token.profilePicture}
                                        alt="User profile picture"
                                        className={`${styles.img} `}
                                    />
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="row align-items-center mt-2">
                        <div className={`d-flex justify-content-center ${styles.userName}`}>
                            {token.firstName} {token.lastName}
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="d-flex justify-content-center">
                            <small className={styles.userStatus}>
                                {token.userStatus === 'admGlobal' ? 'Administrador' : ''}
                            </small>
                        </div>
                    </div>
                    <div style={{ height: "25px" }} className="mt-3 slideDown">
                        {token.companyLogo && (
                            <Link href={"/companyEdit"}>
                                <span type="button" className="row align-items-center">
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src={`${token.companyLogo}`}
                                            className={`${styles.companyLogo} fadeItem1s`}
                                        />
                                    </div>
                                </span>
                            </Link>
                        )}
                    </div>

                    <Scrollbars
                        style={{ height: "65vh" }}
                        autoHide
                        autoHideTimeout={3000}
                        autoHideDuration={200}
                        renderTrackVertical={(props) => (
                            <div {...props} className="vtrackSidebar" />
                        )}
                        renderThumbVertical={(props) => (
                            <div {...props} className="vthumbSidebar" />
                        )}
                    >
                        <ul style={{ width: "95%" }}>
                            <Accordion defaultActiveKey="0">
                                <li>
                                    <ContextAwareToggle eventKey="0" collapse="InicioItem">
                                        <div className="d-flex justify-content-start " type='button' onClick={() => router.push('/')}>
                                            <div className="col-1 text-center me-3">
                                                <FontAwesomeIcon icon={faHome} className="me-2 icon" />
                                            </div>
                                            <div className="col-9">Início</div>
                                        </div>
                                    </ContextAwareToggle>
                                </li>

                                <li>
                                    <ContextAwareToggle eventKey="5" collapse="configuracoesCollapse">
                                        <div className="d-flex">
                                            <div className="col-1 text-center me-3">
                                                <FontAwesomeIcon icon={faGear} className="me-2 icon" />
                                            </div>
                                            <div className="col-9">Configurações</div>
                                            <div className="col-1 toggleIcon text-end">
                                                <FontAwesomeIcon icon={faAngleRight} className=" icon" />
                                            </div>
                                        </div>
                                    </ContextAwareToggle>
                                    <Accordion.Collapse eventKey="5">
                                        <ul>
                                            <li>
                                                <Link href={`/editProfile`}>
                                                    <span>Editar Cartão</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/passwordChange">
                                                    <span>Alterar Senha</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/accountSetup">
                                                    <span>Configuração da Conta</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Accordion.Collapse>
                                </li>
                            </Accordion>
                        </ul>

                    </Scrollbars>

                </div>
            </div>
        </div>
    );
}
