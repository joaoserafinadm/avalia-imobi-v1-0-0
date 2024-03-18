import tippy from "tippy.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEnvelope, faEye, faSearch, faTrash, faUser, faUserGear, faUserTie, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import Link from "next/link";
import { userStatusName } from "../../utils/permissions";



export default function UserCard(props) {

    useEffect(() => {

        setTimeout(() => {
            tippy('#viewUserBtn' + props.elem._id, {
                content: 'Visualizar',
                placement: 'bottom'
            })
            tippy('#whatsappUserBtn' + props.elem._id, {
                content: 'Conversar pelo Whatsapp',
                placement: 'bottom'
            })
        }, 1000)
    }, [])


    const handleWhatsapp = (celular) => {

        const formattedPhoneNumber = celular.replace(/\D/g, '')
        const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`;
        window.open(whatsappURL, '_blank');

    }


    return (
        <div className="col-12 col-lg-6" key={props.elem._id} >
            <div className="card my-2 shadow">
                <div className="card-body">
                    <div className="row d-flex">

                        <div style={{ width: "50px" }}>
                            <img src={props.elem.profileImageUrl} alt="Profile Image" className="akvo-sm-profile-img me-2" />
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-12 col-lg-6 bold">
                                    {!props.elem.lastName && !props.elem.firstName ? "-" : props.elem.firstName + ' ' + props.elem.lastName}
                                </div>
                                <div className="col-12 col-lg-6 text-lg-end small text-secondary">
                                    {props.elem.userStatus === "admGlobal" ? <FontAwesomeIcon icon={faUserGear} className="icon" /> : <FontAwesomeIcon icon={faUserTie} className="icon" />} {userStatusName(props.elem.userStatus) ? userStatusName(props.elem.userStatus) : '-'}
                                </div>
                                <div className="col-12 small">
                                    <FontAwesomeIcon icon={faEnvelope} className={`me-1 text-secondary`} /> {props.elem.email}
                                </div>
                                <div className="col-12 small">
                                    <FontAwesomeIcon icon={faWhatsapp} className={`me-1 text-secondary`} /> {props.elem.celular ? props.elem.celular : 'Não informado'}
                                </div>
                            </div>

                        </div>

                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button
                                    type="button"
                                    class="btn btn-outline-secondary"
                                    id={"viewUserBtn" + props.elem._id}
                                    onClick={() => props.setUserSelected(props.elem)}
                                    data-bs-toggle="modal" data-bs-target="#viewUserModal">
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-outline-secondary"
                                    id={"whatsappUserBtn" + props.elem._id}
                                    disabled={!props.elem.celular}
                                    onClick={() => handleWhatsapp(props.elem.celular)}
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}