import { Swiper, SwiperSlide } from "swiper/react"
import isMobile from "../../utils/isMobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons"





export default function ValuationConfig(props) {




    return (
        <div className="col-12">
            {isMobile() ?
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#5a5a5a',
                        '--swiper-pagination-color': '#5a5a5a',
                        '--swiper-navigation-size': '25px',
                        zIndex: 0
                    }}
                    slidesPerView={1}
                    pagination={{ clickable: false }}
                    navigation>
                    <SwiperSlide key={1} className="text-center  ">

                        <div className="card " type="button">
                            <div className="card-body" style={{ height: "350px" }}>
                                <div className="row" style={{ height: "100%" }}>
                                    <div className="col-12 d-flex justify-content-center align-items-center text-center">
                                        <div>

                                            <div className="col-12">
                                                <FontAwesomeIcon icon={faHouseMedical} className="text-secondary fs-1" />
                                            </div>
                                            <div className="col-12">
                                                <span>Adicionar imóvel para comparação</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={2} className="text-center">

                        <div className="card">
                            <div className="card-body">
                                dsadsa
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
                :
                <div className="col-3 py-1">

                    <div className="card cardAnimation" style={{ height: "350px" }} type="button">
                        <div className="card-body">
                            <div className="row" style={{ height: "100%" }}>
                                <div className="col-12 d-flex justify-content-center align-items-center text-center">
                                    <div>
                                        <div className="col-12">
                                            <FontAwesomeIcon icon={faHouseMedical} className="text-secondary fs-1" />
                                        </div>
                                        <div className="col-12">
                                            <span>Adicionar imóvel para comparação</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </div>
    )
}