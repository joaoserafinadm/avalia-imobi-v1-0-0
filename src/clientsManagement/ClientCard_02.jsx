import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import isMobile from "../../utils/isMobile"
import { handleIcon, handleIconColor } from "../components/icons/propertyTypeIcons"
import styles from './ClientCard.module.scss'
import { faEdit, faEye, faMoneyCheckDollar, faShare, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import tippy from "tippy.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import ClientStatus from "./ClientStatus"
import { replaceAmpersand } from "../../utils/replaceAmpersand"
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export default function ClientCard_02(props) {

    const token = jwt.decode(Cookies.get('auth'))


    const client = props.elem

    useEffect(() => {
        tippy("#viewClientButton" + props.elem._id + props.section, {
            content: "Visualizar",
            placement: 'bottom'
        });
        tippy("#deleteClientButton" + props.elem._id + props.section, {
            content: "Deletar",
            placement: 'bottom'
        });
        tippy("#evaluateClientButton" + props.elem._id + props.section, {
            content: "Avaliar",
            placement: 'bottom'
        });
        tippy("#editClientButton" + props.elem._id + props.section, {
            content: "Editar",
            placement: 'bottom'
        });
        tippy("#shareClientButton" + props.elem._id + props.section, {
            content: "Enviar formulário",
            placement: 'bottom'
        });
    }, [])

    const handleShowClientInfo = (elem) => {

        if (elem.propertyType) return true
        else return false
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? client?.files.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === client?.files.length - 1 ? 0 : prevIndex + 1));
    };

    const handleShare = async (url) => {
        try {
            await navigator.share({
                title: 'Formulário de Cadastro de Imóvel',
                text: 'Formulário de Cadastro de Imóvel',
                url: url
            });
            console.log('Conteúdo compartilhado com sucesso!');
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    }



    return (
        <div class="card my-2 cardAnimation shadow" style={{ width: "100%" }} >


            {!client?.files?.length ?
                <div className=" d-flex card-img-top justify-content-center align-items-center bg-light bg-gradient" style={{ height: '170px' }}>
                    <span className="text-secondary">Sem fotos</span>
                </div>
                :
                <Swiper className="card-img-top "
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        '--swiper-navigation-size': '25px',
                        zIndex: 0
                    }}
                    slidesPerView={1}
                    pagination={{ clickable: false }}
                    navigation>
                    {client?.files?.map((elem, index) => (
                        <SwiperSlide key={index} className="text-center bg-secondary ">


                            <img src={elem.url} className={`card-img-top  ${styles.clientCardImage}`} alt={`Slide ${index + 1}`} />

                        </SwiperSlide>
                    ))}
                </Swiper>
                // <div id="clientImageCarousel" className="carousel slide" data-bs-ride="carousel" >
                //     <div className="carousel-inner card-img-top  ">
                //         {client?.files?.map((elem, index) => (
                //             <div key={index} className={`carousel-item text-center bg-secondary  ${index === activeIndex ? 'active' : ''}`}>
                //                 <img src={elem.url} className={`card-img-top  ${styles.clientCardImage}`} alt={`Slide ${index + 1}`} />
                //             </div>
                //         ))}
                //     </div>
                //     <button className="carousel-control-prev" type="button" data-bs-slide="prev" onClick={handlePrev} >
                //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                //         <span className="visually-hidden">Previous</span>
                //     </button>
                //     <button className="carousel-control-next" type="button" data-bs-slide="next" onClick={handleNext} >
                //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
                //         <span className="visually-hidden">Next</span>
                //     </button>
                // </div>
            }

            {client?.propertyType && (

                <span className={`${styles.propertyTypeHeader} d-flex align-items-center  ${handleIconColor(props.elem.propertyType)}`}  >

                    {!isMobile() ?
                        <div className="small  me-2" >
                            {client?.propertyType}
                        </div>
                        :
                        <div className="small  me-1" style={{ fontSize: '12px' }} >
                            {client?.propertyType}
                        </div>

                    }
                    <FontAwesomeIcon icon={handleIcon(client?.propertyType)} className={`icon`} />
                </span>
            )}

            {/* </div> */}
            <div className={`row d-flex justify-content-end ${styles.profilePosition}`}>

                <span className="d-flex align-items-center">
                    <div className="small bold bg-white pe-3 ps-2" style={{ borderRadius: '5px 0 0 5px', position: 'relative', right: '-10px' }}>

                        Juliane Kosloski
                    </div>
                    <div className="cardProfileImg">

                        <img className="cardProfileImg2 bold border border-4 border-white" style={{ position: 'relative' }}
                            src="https://res.cloudinary.com/joaoserafinadm/image/upload/v1700622419/AVALIA%20IMOBI/USERS_IMG/xwsqidtdw3srsnjvom50.jpg" alt="" />

                    </div>
                </span>

            </div>
            <div class="card-body">


                <h5 class="card-title mt-1"><ClientStatus status={client?.status} id={client?._id} /> {client?.clientName} {client.clientLastName} </h5>



                {handleShowClientInfo(client) ?
                    <>
                        <div className="row small">

                            <div className="col-12 my-2">
                                {client?.bairro && client?.cidade && client?.uf && (
                                    <>
                                        {client?.bairro}, {client?.cidade} / {client?.uf}
                                    </>
                                )}
                            </div>


                        </div>
                        <hr />
                        <div className="row  small d-flex align-items-center">

                            <div className="col-6 text-center  my-2">
                                {client?.areaTotal && (
                                    <>
                                        <div className="bold">
                                            Área Total:
                                        </div>
                                        <div>

                                            {client?.areaTotal} m²
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="col-6  text-center   my-2">
                                {client?.areaTotal && (
                                    <>
                                        <div className="bold">
                                            Área Total Privativa:
                                        </div>
                                        <div>

                                            {client?.areaTotalPrivativa} m²
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="row small d-flex justify-content-center ">

                            <div className="col-6 justify-content-center d-flex  my-2">
                                {client?.quartos && (
                                    <>
                                        <div>
                                            {client.quartos}

                                        </div>
                                        <div className="ms-1 bold">

                                            quarto{client.quartos > 1 ? 's' : ''}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="col-6 justify-content-center d-flex  my-2">

                                {client?.banheiros && (
                                    <>
                                        <div>

                                            {client.banheiros}
                                        </div>
                                        <div className="ms-1 bold">

                                            banheiro{client.banheiros > 1 ? 's' : ''}
                                        </div>
                                    </>
                                )}

                            </div>
                            <div className="col-6 justify-content-center d-flex  my-2">

                                {client?.suites && (
                                    <>
                                        <div>

                                            {client.suites}
                                        </div>
                                        <div className="ms-1 bold">

                                            suíte{client.suites > 1 ? 's' : ''}
                                        </div>
                                    </>
                                )}

                            </div>
                            <div className="col-6 justify-content-center d-flex  my-2">

                                {client?.quartos && (
                                    <>
                                        <div>
                                            {client.vagasGaragem}
                                        </div>
                                        <div className="ms-1 bold">

                                            vaga{client.vagasGaragem > 1 ? 's' : ''}
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>



                        <div className="row d-flex justify-content-center mt-2">
                            <div className="col-12 d-flex justify-content-center">

                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button
                                        type="button"
                                        class="btn btn-light border"
                                        id={"viewClientButton" + props.elem._id}
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewClientModal"
                                        onClick={() => props.setClientSelected(props.elem)}>
                                        <FontAwesomeIcon icon={faEye} className="icon  text-secondary" />
                                    </button>
                                    <button type="button" class="btn btn-light border" id={"evaluateClientButton" + props.elem._id}>
                                        <FontAwesomeIcon icon={faMoneyCheckDollar} className="icon  text-secondary" />
                                    </button>

                                    <button
                                        type="button"
                                        class="btn btn-light border"
                                        id={"deleteClientButton" + props.elem._id}
                                        data-bs-toggle="modal"
                                        data-bs-target={"#deleteClientModal"}
                                        onClick={() => props.setClientSelected(props.elem)}>
                                        <FontAwesomeIcon icon={faTrashAlt} className="icon text-secondary" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>

                    :
                    <>
                        <div className="row my-5 ">
                            <div className="col-12 d-flex justify-content-center">
                                <span>Desatualizado</span>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <div class="btn-group" role="group" aria-label="Basic example">

                                    <button onClick={() => handleShare(props.elem.urlToken + "&userId=" + token.sub)}
                                        type="button"
                                        class="btn btn-light border"
                                        id={"shareClientButton" + props.elem._id + props.section}>
                                        <FontAwesomeIcon icon={faShare} className="icon  text-secondary" />
                                    </button>
                                    {/* <button onClick={() => navigator.clipboard.writeText(props.elem.urlToken + "&userId=" + token.sub)}
                                        type="button"
                                        class="btn btn-light border"
                                        id={"shareClientButton" + props.elem._id + props.section}>
                                        <FontAwesomeIcon icon={faShare} className="icon  text-secondary" />
                                    </button> */}

                                    <button type="button" class="btn btn-light border" id={"editClientButton" + props.elem._id + props.section}>
                                        <FontAwesomeIcon icon={faEdit} className="icon  text-secondary" />
                                    </button>

                                    <button
                                        type="button"
                                        class="btn btn-light border"
                                        id={"deleteClientButton" + props.elem._id}
                                        data-bs-toggle="modal"
                                        data-bs-target={"#deleteClientModal"}
                                        onClick={() => props.setClientSelected(props.elem)}>
                                        <FontAwesomeIcon icon={faTrashAlt} className="icon text-secondary" />
                                    </button>
                                </div>

                            </div>

                        </div>
                    </>
                }



            </div>
        </div >
    )
}