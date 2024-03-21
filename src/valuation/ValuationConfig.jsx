import { Swiper, SwiperSlide } from "swiper/react"
import isMobile from "../../utils/isMobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons"
import PropertyCollection from "./PropertyCollection"





export default function ValuationConfig(props) {




    return (
        <div className="col-12">
            <label htmlFor="" className="fw-bold mb-2">Imóveis para comparação</label>

            <PropertyCollection />
        </div>
    )
}