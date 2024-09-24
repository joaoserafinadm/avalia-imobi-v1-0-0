import { faLock, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Cookie from 'js-cookie'
import jwt from 'jsonwebtoken';
import { isAdmin } from "../../utils/permissions";



export default function AccountDetailsPage(props) {

    const token = jwt.decode(Cookie.get('auth'))



    return (
        <div className="fadeItem">
            <div className="row ">
                <div className="col-12 col-md-3 pt-3">
                    <span className="fs-4 text-bold text-orange" >Sua Conta</span> <br />
                    {/* <button className="btn btn-sm btn-success">Editar <FontAwesomeIcon icon={faPencilAlt} /></button> */}
                </div>
                <div className="col-12 col-md-9">
                    <div className="row border-bottom py-4">
                        <div className="col-12 col-md-3 text-bold">
                            Informações Pessoais
                        </div>
                        <div className="col-12 col-md-9 mt-2 d-flex justify-content-between">
                            <div>

                                <small>{props.userData.firstName} {props.userData.lastName}</small><br />
                                <small>{props.userData.email}</small><br />
                                <small>{props.userData.celular}</small>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link href={`/editProfile/${token.sub}`}>
                                    <span type="button" className="text-orange"><FontAwesomeIcon icon={faPencil} className="editIcon" /></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="row border-bottom py-4">
                        <div className="col-12 col-md-3 text-bold">
                            Senha
                        </div>
                        <div className="col-12 col-md-9 mt-2 d-flex justify-content-between">
                            <small>*********</small>
                            <Link href={`/passwordChange`}>
                                <span type="button" className="text-orange"><FontAwesomeIcon icon={faPencil} className="editIcon" /></span>
                            </Link>

                        </div>
                    </div>
                    <div className="row border-bottom py-4">
                        <div className="col-12 col-md-3 text-bold">
                            Status
                        </div>
                        <div className="col-12 col-md-9 mt-2 d-flex justify-content-between">
                            <small>{token.userStatus === 'admGlobal' ? 'Administrador' : 'Corretor'}</small>
                            <span className="text-orange"><FontAwesomeIcon icon={faLock} /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-3 pt-3 pb-4">
                    <span className="fs-4 text-bold text-orange" >Sua Imobiliária</span> <br />
                    {/* <button className="btn btn-sm btn-success">Editar <FontAwesomeIcon icon={faPencilAlt} /></button> */}
                </div>

                <div className="col-12 col-md-9">
                    <div className="row border-bottom py-4">
                        <div className="col-12 col-md-3 text-bold">
                            Nome
                        </div>
                        <div className="col-12 col-md-9 mt-2 d-flex justify-content-between">
                            <small>{props.companyData.companyName}</small>
                            {isAdmin(props.userData.userStatus) ?
                                <Link href={`/companyEdit`}>
                                    <span type="button" className="text-orange"><FontAwesomeIcon icon={faPencil} className="editIcon" /></span>
                                </Link>
                                :
                                <span className="text-orange"><FontAwesomeIcon icon={faLock} /></span>
                            }

                        </div>
                    </div>
                    <div className="row border-bottom py-4">
                        <div className="col-12 col-md-3 text-bold">
                            Endereço
                        </div>
                        <div className="col-12 col-md-9 mt-2 d-flex justify-content-between">
                            <div>
                                {props.companyData.logradouro && props.companyData.numero && (
                                    <>
                                        <small>{props.companyData.logradouro}, {props.companyData.numero}</small><br />
                                    </>
                                )}
                                <small>{props.companyData.cidade} - {props.companyData.estado}, CEP {props.companyData.cep}</small><br />
                            </div>
                            {isAdmin(props.userData.userStatus) ?
                                <Link href={`/companyEdit`}>
                                    <span type="button" className="text-orange"><FontAwesomeIcon icon={faPencil} className="editIcon" /></span>
                                </Link>
                                :
                                <span className="text-orange"><FontAwesomeIcon icon={faLock} /></span>
                            }


                        </div>
                    </div>
                    {/* <div className="row border-bottom py-4">
                        <div className="col-12 col-md-3 text-bold">
                            Estrutura da plataforma
                        </div>
                        <div className="col-12 col-md-9 mt-2  d-flex justify-content-between">
                            <small>{props.companyData.userConfig === 'basico' ? 'Categoria 1'  === 'avancado' ? 'Categoria 2' : ''}</small>
                            {isAdmin(props.userData.userStatus) ?
                                <Link href={`/companyStructure`}>
                                    <span type="button" className="text-orange"><FontAwesomeIcon icon={faPencil} /></span>
                                </Link>
                                :
                                <span className="text-orange"><FontAwesomeIcon icon={faLock} /></span>
                            }
                        </div>
                    </div> */}
                    <div className="row border-bottom py-4">
                        <div className="col-12 col-md-3 text-bold">
                            Responsável pelo Inventário
                        </div>
                        <div className="col-12 col-md-9 mt-2 d-flex justify-content-between">
                            <small>{props.companyData.responsavel}</small>
                            {isAdmin(props.userData.userStatus) ?
                                <Link href={`/companyEdit`}>
                                    <span type="button" className="text-orange"><FontAwesomeIcon icon={faPencil} className="editIcon" /></span>
                                </Link>
                                :
                                <span className="text-orange"><FontAwesomeIcon icon={faLock} /></span>
                            }

                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col-12 col-md-3 text-bold">
                            E-mail para Contato
                        </div>
                        <div className="col-12 col-md-9 mt-2 d-flex justify-content-between">
                            <small>{props.companyData.email}</small>
                            {isAdmin(props.userData.userStatus) ?
                                <Link href={`/companyEdit`}>
                                    <span type="button" className="text-orange"><FontAwesomeIcon icon={faPencil} className="editIcon" /></span>
                                </Link>
                                :
                                <span className="text-orange"><FontAwesomeIcon icon={faLock} /></span>
                            }

                        </div>
                    </div>
                    <hr />
                    <div className="row mt-2">
                        <div className="col-12 d-flex justify-content-end">
                            <button data-bs-toggle="modal" data-bs-target="#exitAccountModal" className="btn btn-sm btn-outline-danger">Sair da conta</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}