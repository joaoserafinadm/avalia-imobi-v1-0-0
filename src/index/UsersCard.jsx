import Link from "next/link";
import Icons from "../components/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCrown, faKey, faLightbulb, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Loading from "./Loading";



export default function UsersCard(props) {

    const { clientsStatus, clientsArray, loading } = props

    const [totalStatus, setTotalStatus] = useState(0)

    useEffect(() => {


    }, [props])













    return (
        <div className="card cardAnimation shadow my-2" style={{ height: '100%' }}>

            {loading && <Loading />}

            <div className="card-body">
                <div className="row  d-flex  ">

                    <Link href='/clientsManagement'>

                        <div className="col-12 d-flex justify-content-between align-items-center">

                            <span className="fs-3 bold text-orange">Usuários</span>
                            <span className=" text-secondary small d-flex align-items-center span fw-bold">
                                Acessar<Icons icon="a-r" className="ms-1" />
                            </span>

                        </div>
                        <div className="col-12 d-flex justify-content-start align-items-top mb-3">

                            <span className="small text-secondary">Visualize todos os usuários cadastrados</span>

                        </div>
                    </Link>

                    <hr />
                    <div className="col-12 d-flex justify-content-center text-center" >

                        <span className="small text-secondary fw-bold">Campeão de captações</span>
                    </div>
                    <div className="col-12 mt-2 ">

                        <div className="card">
                            <div className="card-body">
                                <div className="col-12 mt-2 ">
                                    <div className="row d-flex justify-content-center">

                                        <div className="position-relative text-center" style={{ width: '150px' }}>
                                            <div className="col-12 d-flex justify-content-center">

                                                <span style={{ position: 'absolute', right: '20px', top: '-15px', transform: 'rotate(20deg)' }}>
                                                    <FontAwesomeIcon icon={faCrown} className="text-warning fs-2" />
                                                </span>
                                                <span style={{ position: 'absolute', left: '10px', top: '90px', transform: 'rotate(70deg)' }}>
                                                    <FontAwesomeIcon icon={faKey} className="text-secondary fs-2" />
                                                </span>

                                                <img src="https://res.cloudinary.com/joaoserafinadm/image/upload/v1710637488/AVALIA%20IMOBI/USERS_IMG/h4vnx6vfzc5hfyuvjt8h.jpg"
                                                    className="rounded-circle" alt="" height={125} />
                                            </div>
                                            <span className="small fw-bold text-secondary">
                                                Juliane Kosloski
                                            </span>
                                        </div>

                                        <div className="col-lg col-12">
                                            <div className="row d-flex h-100">


                                                <div className="col-6 d-flex justify-content-center align-items-center my-2 text-center text-secondary">
                                                    <div>

                                                        <span className="fw-bold fs-3 ">12</span><br />
                                                        <span className="bold text-orange ">Clientes</span>
                                                    </div>
                                                </div>

                                                <div className="col-6 d-flex justify-content-center align-items-center my-2 text-center text-secondary">
                                                    <div>

                                                        <span className="fw-bold fs-3">4,5 <FontAwesomeIcon icon={faStar} className="text-warning" /></span><br />
                                                        <span className="bold text-orange">Nota de atendimento</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 d-flex justify-content-center text-center mt-4" >

                        <span className="small text-secondary fw-bold">Mestre de avaliações</span>
                    </div>



                    <div className="col-12 mt-2 ">

                        <div className="card">
                            <div className="card-body">
                                <div className="col-12 mt-2 ">
                                    <div className="row d-flex justify-content-center">

                                        <div className="position-relative text-center" style={{ width: '150px' }}>
                                            <div className="col-12 d-flex justify-content-center">

                                                <span style={{ position: 'absolute', left: '20px', top: '-10px', transform: 'rotate(-20deg)' }}>
                                                    <FontAwesomeIcon icon={faLightbulb} className="text-primary fs-2" />
                                                </span>
                                                <span style={{ position: 'absolute', right: '10px', top: '90px', transform: 'rotate(10deg)' }}>
                                                    <FontAwesomeIcon icon={faCalculator} className="text-secondary fs-2" />
                                                </span>

                                                <img src="https://res.cloudinary.com/joaoserafinadm/image/upload/v1706543961/AVALIA%20IMOBI/USERS_IMG/bghic5n6mdixbcpkwkal.jpg"
                                                    className="rounded-circle" alt="" height={125} />
                                            </div>
                                            <span className="small fw-bold text-secondary">
                                                Augusto Schmitt
                                            </span>
                                        </div>

                                        <div className="col-lg col-12">
                                            <div className="row d-flex h-100">


                                                <div className="col-6 d-flex justify-content-center align-items-center my-2 text-center text-secondary">
                                                    <div>

                                                        <span className="fw-bold fs-3">7</span><br />
                                                        <span className="bold text-orange">Avaliações</span>
                                                    </div>
                                                </div>

                                                <div className="col-6 d-flex justify-content-center align-items-center my-2 text-center text-secondary">
                                                    <div>
                                                        <span className="fw-bold " style={{ fontSize: '1rem' }}>R$ 1.500.000,00</span><br />
                                                        <span className="bold text-orange">Ticket médio de avaliação</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>

            </div>
        </div>
    )
}