import { faEdit, faEye, faMoneyCheckDollar, faShare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showClientInfo } from "../../utils/showClientInfo";






export default function ClientFeatures(props) {


    const client = props.client


    return (
        <>
            {showClientInfo(client) ?
                <>
                    <div className="row small">

                        <div className="col-12 my-2">
                            {client?.bairro && client?.cidade && client?.uf ?
                                <>
                                    {client?.bairro}, {client?.cidade} / {client?.uf}
                                </>
                                :
                                <>
                                    Endereço não informado
                                </>
                            }
                        </div>


                    </div>
                    <hr />

                    {client.propertyType === "Apartamento" && (
                        <>
                            <div className="row  small d-flex align-items-center">

                                <div className="col-6 text-center  my-2">
                                    {/* {client?.areaTotal && ( */}
                                    <>
                                        <div className="bold">
                                            Área Total:
                                        </div>
                                        <div>

                                            {client?.areaTotal ? client?.areaTotal : 0} m²
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                                <div className="col-6  text-center   my-2">
                                    {/* {client?.areaTotal && ( */}
                                    <>
                                        <div className="bold">
                                            Área Total Privativa:
                                        </div>
                                        <div>

                                            {client?.areaTotalPrivativa ? client?.areaTotalPrivativa : 0} m²
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                            </div>




                            <div className="row small d-flex justify-content-center ">

                                <div className="col-6 justify-content-center d-flex  my-2">
                                    {/* {client?.quartos && ( */}
                                    <>
                                        <div>
                                            {client.quartos ? client.quartos : 0}

                                        </div>
                                        <div className="ms-1 bold">

                                            quarto{client.quartos != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                                <div className="col-6 justify-content-center d-flex  my-2">

                                    {/* {client?.banheiros && ( */}
                                    <>
                                        <div>

                                            {client.banheiros ? client.banheiros : 0}
                                        </div>
                                        <div className="ms-1 bold">

                                            banheiro{client.banheiros != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}

                                </div>
                                <div className="col-6 justify-content-center d-flex  my-2">

                                    {/* {client?.suites && ( */}
                                    <>
                                        <div>

                                            {client.suites ? client.suites : 0}
                                        </div>
                                        <div className="ms-1 bold">

                                            suíte{client.suites != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}

                                </div>
                                <div className="col-6 justify-content-center d-flex  my-2">

                                    {/* {client?.vagasGaragem && ( */}
                                    <>
                                        <div>
                                            {client.vagasGaragem ? client.vagasGaragem : 0}
                                        </div>
                                        <div className="ms-1 bold">

                                            vaga{client.vagasGaragem != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}

                                </div>
                            </div>
                        </>
                    )}


                    {client.propertyType === "Casa" && (
                        <>
                            <div className="row  small d-flex align-items-center">

                                <div className="col-6 text-center  my-2">
                                    {/* {client?.areaTotal && ( */}
                                    <>
                                        <div className="bold">
                                            Área do terreno:
                                        </div>
                                        <div>

                                            {client?.areaTotal ? client?.areaTotal : 0} m²
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                                <div className="col-6  text-center   my-2">
                                    {/* {client?.areaTotal && ( */}
                                    <>
                                        <div className="bold">
                                            Área privativa - Casa:
                                        </div>
                                        <div>

                                            {client?.areaTotalPrivativa ? client?.areaTotalPrivativa : 0} m²
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                            </div>




                            <div className="row small d-flex justify-content-center ">

                                <div className="col-6 justify-content-center d-flex  my-2">
                                    {/* {client?.pavimentos && ( */}
                                    <>
                                        <div>
                                            {client.pavimentos ? client.pavimentos : 0}

                                        </div>
                                        <div className="ms-1 bold">

                                            pavimento{client.pavimentos != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                                <div className="col-6 justify-content-center d-flex  my-2">
                                    {/* {client?.quartos && ( */}
                                    <>
                                        <div>
                                            {client.quartos ? client.quartos : 0}

                                        </div>
                                        <div className="ms-1 bold">

                                            quarto{client.quartos != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                                <div className="col-6 justify-content-center d-flex  my-2">

                                    {/* {client?.banheiros && ( */}
                                    <>
                                        <div>

                                            {client.banheiros ? client.banheiros : 0}
                                        </div>
                                        <div className="ms-1 bold">

                                            banheiro{client.banheiros != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}

                                </div>
                                <div className="col-6 justify-content-center d-flex  my-2">

                                    {/* {client?.suites && ( */}
                                    <>
                                        <div>

                                            {client.suites ? client.suites : 0}
                                        </div>
                                        <div className="ms-1 bold">

                                            suíte{client.suites != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}

                                </div>
                                <div className="col-6 justify-content-center d-flex  my-2">

                                    {/* {client?.vagasGaragem && ( */}
                                    <>
                                        <div>
                                            {client.vagasGaragem ? client.vagasGaragem : 0}
                                        </div>
                                        <div className="ms-1 bold">

                                            vaga{client.vagasGaragem != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}

                                </div>
                            </div>
                        </>
                    )}



                    {client.propertyType === "Comercial" && (
                        <>
                            <div className="row  small d-flex align-items-center">

                                <div className="col-6 text-center  my-2">
                                    {/* {client?.areaTotal && ( */}
                                    <>
                                        <div className="bold">
                                            Área Total:
                                        </div>
                                        <div>

                                            {client?.areaTotal ? client?.areaTotal : 0} m²
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                                <div className="col-6  text-center   my-2">
                                    {/* {client?.areaTotal && ( */}
                                    <>
                                        <div className="bold">
                                            Área Total Privativa:
                                        </div>
                                        <div>

                                            {client?.areaTotalPrivativa ? client?.areaTotalPrivativa : 0} m²
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                            </div>




                            <div className="row small d-flex justify-content-center ">

                                <div className="col-6 justify-content-center d-flex  my-2">
                                    {/* {client?.pavimentos && ( */}
                                    <>
                                        <div>
                                            {client.pavimentos ? client.pavimentos : 0}

                                        </div>
                                        <div className="ms-1 bold">

                                            pavimento{client.pavimentos != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>

                                <div className="col-6 justify-content-center d-flex  my-2">
                                    {/* {client?.salas && ( */}
                                    <>
                                        <div>
                                            {client.salas ? client.salas : 0}

                                        </div>
                                        <div className="ms-1 bold">

                                            sala{client.salas != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>

                                <div className="col-6 justify-content-center d-flex  my-2">

                                    {/* {client?.banheiros && ( */}
                                    <>
                                        <div>

                                            {client.banheiros ? client.banheiros : 0}
                                        </div>
                                        <div className="ms-1 bold">

                                            banheiro{client.banheiros != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}

                                </div>

                                <div className="col-6 justify-content-center d-flex  my-2">

                                    {/* {client?.vagasGaragem && ( */}
                                    <>
                                        <div>
                                            {client.vagasGaragem ? client.vagasGaragem : 0}
                                        </div>
                                        <div className="ms-1 bold">

                                            vaga{client.vagasGaragem != 1 ? 's' : ''}
                                        </div>
                                    </>
                                    {/* )} */}

                                </div>
                            </div>
                        </>
                    )}



                    {client.propertyType === "Terreno" && (
                        <>
                            <div className="row  small d-flex align-items-center">

                                <div className="col-12 text-center  my-2">
                                    {/* {client?.areaTotal && ( */}
                                    <>
                                        <div className="bold">
                                            Área Total:
                                        </div>
                                        <div>

                                            {client?.areaTotal ? client?.areaTotal : 0} m²
                                        </div>
                                    </>
                                    {/* )} */}
                                </div>
                            </div>


                        </>
                    )}





                </>

                :
                <>
                    <div className="row my-5 ">
                        <div className="col-12 d-flex justify-content-center">
                            <span>Desatualizado</span>

                        </div>
                    </div>

                </>
            }
        </>

    )
}