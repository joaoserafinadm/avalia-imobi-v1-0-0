
import { useState } from "react"
import PropertyTypeCard from "../addClient/PropertyTypeCard"
import Map from "../pages/newClient/Map"
import { Swiper, SwiperSlide } from "swiper/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import ClientInfoApartamento from "./ClientInfoApartamento"
import ClientInfoCasa from "./ClientInfoCasa"
import ClientInfoComercial from "./ClientInfoComercial"
import ClientInfoTerreno from "./ClientInfoTerreno"




export default function ClientInfo(props) {

    const client = props.client


    return (
        <>
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <Link href={`/clientEdit/${client?._id}`} onClick={() => console.log("edit", client)}>
                        <span className="span">Editar</span>
                    </Link>
                </div>
                <div className="col-12  col-md-6 d-flex  justify-content-center my-2">
                    <PropertyTypeCard type={client?.propertyType} />
                </div>
                <div className="col-12  col-md-6 d-flex  justify-content-center my-2">
                    <div className="row">
                        <div className="col-12 ">
                            <span className="fs-2">{client?.clientName} {client?.clientLastName}</span>
                        </div>
                        <div className="col-12 text-secondary">
                            <FontAwesomeIcon icon={faEnvelope} className="me-2" /><span>{client?.email}</span>
                        </div>
                        <div className="col-22 text-secondary">
                            <FontAwesomeIcon icon={faWhatsapp} className="me-1" /><span>{client?.celular}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                {client?.propertyType === 'Apartamento' && (
                    <ClientInfoApartamento client={client} />
                )}
                {client?.propertyType === 'Casa' && (
                    <ClientInfoCasa client={client} />
                )}
                {client?.propertyType === 'Comercial' && (
                    <ClientInfoComercial client={client} />
                )}
                {client?.propertyType === 'Terreno' && (
                    <ClientInfoTerreno client={client} />
                )}

                < div className="px-3" >
                    <hr />
                </div >

                <div className="col-12 mb-2">
                    <label for="geralForm" className=" fw-bold">Caracteristicas Gerais</label>
                </div>
                <div className="col-12 my-2 mb-4">
                    {client?.features?.map(elem => {
                        return (
                            <span className="me-1">#<b className="bold">{elem}</b></span>
                        )
                    })}
                </div>
                <div className="col-12 mb-2">
                    <label for="geralForm" className=" fw-bold">Observações</label>

                </div>
                <div className="col-12 my-2 mb-4">
                    <textarea name="" id="" disabled rows={3} className="form-control" value={client?.comments} />

                </div>
                <div className="px-3">
                    <hr />
                </div>

                <div className="col-12 mb-2">
                    <label for="geralForm" className="form-label fw-bold">Imagens</label>
                </div>

                {
                    client?.files?.length === 0 ?
                        <div className="col-12 my-2 d-flex justify-content-center mb-5">
                            <span className="small">Nenhuma imagem carregada</span>
                        </div>
                        :
                        <div className="col-12 my-2 d-flex align-items-center mb-5" >

                            {/* {client?.files?.map(elem => {
                                            return (
                                                <div>
                                                    <img src={elem.url} alt="" className="fileImgs mx-2 fadeItem" />
                                                </div>
                                            )
                                        })} */}



                            <Swiper
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



                                        <img src={elem.url} className={`imovel-img`} alt={`Slide ${index + 1}`} />

                                    </SwiperSlide>
                                ))}
                            </Swiper>



                        </div>




                }

                <div className="px-3">
                    <hr />
                </div>

                <div className="col-12 mb-2">
                    <label for="geralForm" className="form-label fw-bold">Localização</label>
                </div>

                <div className="col-12 my-2">
                    {client?.logradouro ? client?.logradouro + ', ' : ''} {client?.numero ? client?.numero + ', ' : ''} {client?.cep ? client?.cep + ', ' : ''} {client?.cidade} / {client?.uf}
                </div>


                <div className="col-12 my-2 mb-4" >


                    {client?.latitude && client?.longitude && (

                        <Map location={{ lat: client?.latitude, lng: client?.longitude }} zoom={18} height="300px" />
                    )}

                </div>




            </div>
        </>
    )
}