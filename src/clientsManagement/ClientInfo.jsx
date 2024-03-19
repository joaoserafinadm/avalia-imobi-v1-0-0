
import { useState } from "react"
import PropertyTypeCard from "../addClient/PropertyTypeCard"
import Map from "../pages/newClient/Map"
import { Swiper, SwiperSlide } from "swiper/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"




export default function ClientInfo(props) {

    const client = props.client


    return (
        <>
            <div className="row">
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
                <div className="col-12 col-md-4 my-2 d-flex">
                    <div className="bold me-1">
                        Área Total:
                    </div>
                    <div>
                        {client?.areaTotal ? client?.areaTotal : 0} m²
                    </div>
                </div>
                <div className="col-12 col-md-6 my-2 d-flex">
                    <div className="bold me-1">
                        Área Total Privativa:
                    </div>
                    <div>
                        {client?.areaTotalPrivativa ? client?.areaTotalPrivativa : 0} m²
                    </div>

                </div>
                {client?.quartos >= 0 && (
                    <div className="col-12 col-md-4 my-2 d-flex">
                        <div>
                            {client?.quartos ? client?.quartos : 0}

                        </div>
                        <div className="ms-1 bold">

                            quarto{client?.quartos != 1 ? 's' : ''}
                        </div>
                    </div>
                )}



                <div className="col-12 col-md-4 my-2 d-flex">
                    <div>

                        {client?.suites ? client?.suites : 0}
                    </div>
                    <div className="ms-1 bold">

                        suíte{client?.suites != 1 ? 's' : ''}
                    </div>
                </div>
                <div className="col-12 col-md-4 my-2 d-flex">
                    <div>

                        {client?.banheiros ? client?.banheiros : 0}
                    </div>
                    <div className="ms-1 bold">

                        banheiro{client?.banheiros != 1 ? 's' : ''}
                    </div>
                </div>
                <div className="col-12 col-md-4 my-2 d-flex">
                    <div>

                        {client?.vagasGaragem ? client?.vagasGaragem : 0}
                    </div>
                    <div className="ms-1 bold">

                        vaga{client?.vagasGaragem != 1 ? 's' : ''} de garagem
                    </div>
                </div>
                <div className="col-12 col-md-4 my-2 d-flex">
                    <div>

                        {client?.sacadas ? client?.sacadas : 0}
                    </div>
                    <div className="ms-1 bold">

                        sacada{client?.sacadas != 1 ? 's' : ''}
                    </div>
                </div>
                <div className="col-12 col-md-4 my-2 d-flex mb-4">

                    <div>

                        {client?.andar ? client?.andar : 0}º
                    </div>
                    <div className="ms-1 bold">

                        andar{client?.sacadas != 1 ? 's' : ''}
                    </div>


                </div>
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



                                        <img src={elem.url} className={``} alt={`Slide ${index + 1}`} height={350} style={{ objectFit: 'cover' }} />

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
                    {client?.logradouro ? client?.logradouro + ', ' : ''} {client?.numero ? client?.numero + ', ' : ''} {client?.cep ? client?.cep + ', ' : ''} {client?.cidade} / {client?.estado}
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