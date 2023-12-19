import { useState } from "react";
import { SpinnerLG } from "../src/components/loading/Spinners";
import Title from "../src/components/title/Title2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCheck, faEdit, faEye, faHouse, faHouseUser, faMapLocation, faShop, faStore, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import VerticalLine from "../utils/VerticalLine";




export default function clientsManagement() {

    const [loadingPage, setLoadingPage] = useState(false)
    const [array, setArray] = useState(["Apartamento", "Apartamento", "Casa", "Terreno", "Comercial"])



    const handleIconColor = (elem) => {

        if (elem === 'Apartamento') {
            return 'apartamento-color'
        }
        if (elem === 'Casa') {
            return 'casa-color'
        }
        if (elem === 'Terreno') {
            return 'terreno-color'
        }
        if (elem === 'Comercial') {
            return 'comercial-color'
        }
        else return ''
    }

    const handleIcon = (elem) => {

        if (elem === 'Apartamento') {
            return faBuilding
        }
        if (elem === 'Casa') {
            return faHouse
        }
        if (elem === 'Terreno') {
            return faMapLocation
        }
        if (elem === 'Comercial') {
            return faStore
        }
        else return ''
    }

    return (
        <div >
            <Title title={'Gestão de Clientes'} backButton='/' />
            {loadingPage ?
                <SpinnerLG />
                :
                <div className="pagesContent shadow fadeItem" id="pageTop">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end ">
                            <button className="btn btn-sm btn-orange">
                                Adicionar Cliente
                            </button>
                        </div>
                    </div>
                    <hr />

                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            {array.map(elem => {


                                return (

                                    <div className="card my-3 cardAnimation" type="button">
                                        <div className="card-body d-flex">
                                            <div className="col me-2">

                                                <div className="row">
                                                    <div className="col-12 d-flex ">
                                                        <div className="col d-flex align-items-center">

                                                            <span className="fs-5 bold">
                                                                João Serafin
                                                            </span>
                                                            <FontAwesomeIcon icon={faCheck} className="icon text-success ms-2" />
                                                        </div>

                                                        <span className={`col fs-5 d-flex align-items-center justify-content-end ${handleIconColor(elem)}`}>
                                                            <div className="">

                                                                {elem}
                                                            </div>
                                                            <FontAwesomeIcon icon={handleIcon(elem)} className={`icon ms-2`} />
                                                        </span>


                                                    </div>
                                                </div>
                                                <div className="row mt-1">
                                                    <div className="col-12 d-flex justify-content-between">
                                                        <div className="col">
                                                            <span className="d-flex align-items-center">
                                                                <div className="me-2">
                                                                    <img className="cardProfileImg"
                                                                        src="https://res.cloudinary.com/joaoserafinadm/image/upload/v1700622419/AVALIA%20IMOBI/USERS_IMG/xwsqidtdw3srsnjvom50.jpg" alt="" />
                                                                </div>
                                                                <div>

                                                                    Juliane Kosloski
                                                                </div>
                                                            </span>


                                                        </div>
                                                        <div className="col d-flex justify-content-center align-items-center">

                                                            <span className="small">
                                                                Atualizado em: 10/10/2020
                                                            </span>
                                                        </div>
                                                        <div className="col d-flex justify-content-end align-items-center">
                                                            <span className="small">
                                                                Data de cadastro: 10/10/2020
                                                            </span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <VerticalLine />
                                            <div className="d-flex justify-content-center align-items-center" style={{ width: '120px', height: '60px' }} >
                                                <div class="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" class="btn btn-light border"><FontAwesomeIcon icon={faEye} className="icon  text-secondary" /></button>
                                                    {/* <button type="button" class="btn btn-light border"><FontAwesomeIcon icon={faEdit} className="icon text-secondary" /></button> */}
                                                    <button type="button" class="btn btn-light border"><FontAwesomeIcon icon={faTrashAlt} className="icon text-secondary" /></button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                )
                            })}


                        </div>

                    </div>

                </div>

            }
        </div>
    );
}