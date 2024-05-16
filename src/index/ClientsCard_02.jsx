import Link from "next/link";
import Icons from "../components/icons";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faStar } from "@fortawesome/free-solid-svg-icons";
import ClientIndexCard from "./ClientIndexCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });



export default function ClientsCard_02(props) {

    const { clientsStatus, clientsArray, loading } = props

    const [totalStatus, setTotalStatus] = useState(0)

    useEffect(() => {

        console.log("clientsStatus", clientsStatus)

        setTotalStatus(clientsStatus.outdated + clientsStatus.active + clientsStatus.evaluated + clientsStatus.answered)

    }, [props])













    return (
        <div className="card cardAnimation shadow my-2">

            {loading && <Loading />}

            <div className="card-body">
                <div className="row  d-flex  ">

                    <Link href='/clientsManagement'>

                        <div className="col-12 d-flex justify-content-between align-items-center">

                            <span className="fs-3 bold text-orange">Clientes</span>
                            <span className=" text-secondary small d-flex align-items-center span fw-bold">
                                Acessar<Icons icon="a-r" className="ms-1" />
                            </span>

                        </div>
                        <div className="col-12 d-flex justify-content-start align-items-top mb-3">

                            <span className="small text-secondary">Cadastre e avalie os imóveis de seus clientes</span>

                        </div>
                    </Link>

                    <hr />
                    <div className="col-12 d-flex justify-content-center text-center" >

                        <span className="small text-secondary fw-bold">Meus resultados</span>
                    </div>
                    <div className="col-12">
                        <div className="row d-flex">


                            <div className="col-6 d-flex justify-content-center align-items-end my-2 text-center text-secondary">
                                <div>

                                    <span className="fw-bold fs-3 ">12</span><br />
                                    <span className="bold text-orange ">Clientes</span>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-end my-2 text-center text-secondary">
                                <div>

                                    <span className="fw-bold fs-3">7</span><br />
                                    <span className="bold text-orange">Avaliações</span>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-end my-2 text-center text-secondary">
                                <div>

                                    <span className="fw-bold fs-3">4,5 <FontAwesomeIcon icon={faStar} className="text-warning" /></span><br />
                                    <span className="bold text-orange">Nota de atendimento</span>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-end my-2 text-center text-secondary">
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
    )
}