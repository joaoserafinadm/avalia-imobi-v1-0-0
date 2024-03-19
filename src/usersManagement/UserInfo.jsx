import { faEnvelope, faMapMarkerAlt, faPhone, faUser, faUserGear, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { permissionShow, userStatusName } from "../../utils/permissions"




export default function UserInfo(props) {

    const user = props.user
    const token = props.token


    return (
        <>
        <div className="modal-body">
            {permissionShow(token?.userStatus, user?._id, token?.sub, true) && (

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <div className="dropdown">

                            <span className="span" data-bs-toggle="dropdown" type="button">Editar</span>

                            <ul className="dropdown-menu dropdown-menu-end" >
                                <li
                                    className='mb-1 dropdown-item '
                                    type="button"
                                    onClick={() => props.setEditStatus(true)}>
                                    Editar categoria do usuário
                                </li>
                                <li
                                    className='my-1 dropdown-item text-danger'
                                    type="button"
                                    onClick={() => props.setDeleteStatus(true)}>
                                    Excluir usuário

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className="row d-flex justify-content-center fadeItem">
                <div className="text-center col-12" style={{ width: '170px' }}>
                    <img src={user?.profileImageUrl} alt="" className="rounded-circle" height={150} />
                </div>
                <div className="col-sm col-12">
                    <div className="row ">
                        <div className="col-12 text-sm-start text-center">
                            <span className="fs-5 bold"> {user?.firstName} {user?.lastName}</span>
                        </div>
                        <div className="col-12 text-secondary text-sm-start text-center">
                            {user?.userStatus === "admGlobal" ? <FontAwesomeIcon icon={faUserGear} /> : <FontAwesomeIcon icon={faUserTie} />} {userStatusName(user?.userStatus) ? userStatusName(user?.userStatus) : '-'}

                        </div>
                        <div className="col-12 text-secondary">
                            Creci: {user?.creci}
                        </div>
                        <div className="col-12 text-secondary mt-3">
                            <FontAwesomeIcon icon={faEnvelope} className={`me-1`} /> {user?.workEmail}
                        </div>
                        <div className="col-12 text-secondary">
                            <FontAwesomeIcon icon={faWhatsapp} className={`me-1`} /> {user?.celular ? user?.celular : 'Não informado'}
                        </div>
                        <div className="col-12 text-secondary">
                            <FontAwesomeIcon icon={faPhone} className={`me-1`} /> {user?.telefone ? user?.telefone : 'Não informado'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <button className="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal" onClick={() => props.handleCloseModal()}>Fechar</button>
        </div>
        </>

    )
}