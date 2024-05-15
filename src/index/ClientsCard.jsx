import Link from "next/link";
import Icons from "../components/icons";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import ClientIndexCard from "./ClientIndexCard";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });



export default function ClientsCard(props) {

    const { clientsStatus, clientsArray, loading } = props

    const [totalStatus, setTotalStatus] = useState(0)

    useEffect(() => {

        console.log("clientsStatus", clientsStatus)

        setTotalStatus(clientsStatus.outdated + clientsStatus.active + clientsStatus.evaluated + clientsStatus.answered)

    }, [props])



    const budgetsState = {

        series: [clientsStatus.outdated, clientsStatus.active, clientsStatus.evaluated, clientsStatus.answered],
        options: {
            chart: {
                type: 'donut',
            },
            colors: ["#6c757d", "#ffc107", "#0d6efd", "#00c661"],
            labels: ["Aguardando cadastro", "Aguardando  avaliação", "Avaliados", "Finalizados"],
            legend: {
                position: 'right',
                horizontalAlign: 'center',
            },

            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return (totalStatus * val.toFixed(0) / 100).toFixed(0);
                },

                style: {
                    fontSize: '20px',
                    fontWeight: 'bold',

                },
                // offsetY: '50px',
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            name: {
                                show: true
                            },
                            value: {
                                show: true,
                                fontSize: '20px',
                                fontWeight: 'bold',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                fontSize: '15px',
                                fontWeight: 'bold',
                                formatter: function (w) {
                                    return (totalStatus).toFixed(0);
                                }
                            }
                        }
                    }
                }
            },
            // fill: {
            //     type: "gradient",
            //     gradient: {
            //         shade: "dark",
            //         type: "horizontal",
            //         shadeIntensity: 0.5,
            //         inverseColors: true,
            //         opacityFrom: 1,
            //         opacityTo: 1,
            //         stops: [0, 100]
            //     }
            // },
            responsive: [{
                breakpoint: 575,
                options: {
                    chart: {
                        width: '100%'
                    },
                    legend: {
                        position: 'bottom',
                        horizontalAlign: 'center',

                    }
                }
            }]
        },


    };









    return (
        <div className="card cardAnimation shadow">

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
                    {!loading ?
                        <>
                            {!!clientsArray.length ?
                                <>
                                    <div className="col-12 col-md-6 my-2 d-flex justify-content-evenly align-items-center fadeItem">
                                        <div className="col-12 col-lg-10">

                                            <div className="text-center" style={{ width: '100%' }}>
                                                {/* <span className="fw-bold text-secondary" >Clientes</span> */}

                                                <div id="chart">
                                                    <Chart options={budgetsState.options} series={budgetsState.series} type="donut" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-12 col-md-6 px-0 fadeItem">


                                        <div className="card h-100 ">
                                            <div className="card-body ">
                                                <span className="small text-secondary bold"> Últimos clientes cadastrados</span>
                                                <div className="row " style={{ height: '250px', overflowY: 'scroll' }}>


                                                    {clientsArray?.map(elem => {
                                                        return (
                                                            <div className="col-12 my-2 ">
                                                                <ClientIndexCard elem={elem} />
                                                            </div>
                                                        )
                                                    })}
                                                    <div className="col-12 text-center my-2">
                    <Link href='/clientsManagement'>

                                                        <span className="span" type="button">Visualizar todos</span>
                                                        </Link>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                                :
                                <div className="row d-flex justify-content-center align-items-center my-5">
                                    <div className="col-12 d-flex justify-content-center align-items-center">

                                        <span className="small text-secondary">Nenhum cliente cadastrado</span>
                                    </div>
                                </div>
                            }

                        </>
                        :
                        <div className="row my-5">

                        </div>
                    }


                </div>

            </div>
        </div>
    )
}