import { Swiper, SwiperSlide } from "swiper/react"
import isMobile from "../../utils/isMobile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons"
import PropertyCollection from "./PropertyCollection"
import PropertyAddModal from "./PropertyAdd"
import { useState } from "react"
import { maskMoney } from "../../utils/mask"
import valuationCalc from "./valuationCalc"
import VerticalLine from "../../utils/VerticalLine"





export default function ValuationConfig(props) {

    const client = props.client

    const [propertyArray, setPropertyArray] = useState([])
    const [areaTotalStatus, setAreaTotalStatus] = useState(false)
    const [valorIdealRange, setValorIdealRange] = useState(0)
    const [curtoPrazoRange, setCurtoPrazoRange] = useState(7)
    const [longoPrazoRange, setLongoPrazoRange] = useState(7)

    const [forceUpdate, setForceUpdate] = useState(0)

    const priceAverage = (array) => {
        console.log(array)

        const average = (array.reduce((a, b) => a + +b.propertyPrice.replace(/\./g, ''), 0) / array.length).toFixed(0)


        return maskMoney(average.toString())
    }







    return (
        <>
            <div className="col-12">
                <label htmlFor="" className="fw-bold mb-2">Imóveis para comparação</label>

                <PropertyCollection
                    propertyArray={propertyArray}
                    setPropertyArray={value => setPropertyArray(value)} />



                <PropertyAddModal
                    client={client}
                    setPropertyArray={value => setPropertyArray(value)}
                    setForceUpdate={() => setForceUpdate(forceUpdate + 1)}
                    propertyArray={propertyArray} />
            </div>

            <div className="col-12 mt-5">
                <label htmlFor="" className="fw-bold mb-2">Cálculo</label>
                {/*  */}


                <div className="row d-flex px-2">

                    <div className="col-12 col-lg-4 px-1 my-1">

                        <div className="card ">
                            <div className="card-body text-center ">
                                <span className="text-secondary fw-bold me-1 ">Venda curto prazo</span> <br />
                                <span className="text-orange me-1 fs-5">R$</span>
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).curtoPrazoValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).curtoPrazoValue + ',00' : 0}</span>
                                <div className="d-flex">
                                    <input type="range" class="form-range" min="0" max="50" step="1" id="longoPrazoRange" value={curtoPrazoRange} onChange={(e) => setCurtoPrazoRange(e.target.value)} />
                                    <span class="badge bg-secondary ms-1">-{curtoPrazoRange}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 px-1 my-1">

                        <div className="card">
                            <div className="card-body text-center ">
                                <span className="text-secondary fw-bold me-1 ">Valor ideal</span> <br />
                                <span className="text-orange me-1 fs-5">R$</span>
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).valorIdealValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).valorIdealValue + ',00' : 0}</span>
                                <div className="d-flex">
                                    <input type="range" class="form-range" min="-50" max="50" step="1" id="valorIdealRange" value={valorIdealRange} onChange={(e) => setValorIdealRange(e.target.value)} />
                                    <span class="badge bg-secondary ms-1">{valorIdealRange}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 px-1 my-1">

                        <div className="card ">
                            <div className="card-body text-center ">
                                <span className="text-secondary fw-bold me-1 ">Venda longo prazo</span> <br />
                                <span className="text-orange me-1 fs-5">R$</span>
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).longoPrazoValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).longoPrazoValue + ',00' : 0}</span>
                                <div className="d-flex">
                                    <input type="range" class="form-range" min="0" max="50" step="1" id="longoPrazoRange" value={longoPrazoRange} onChange={(e) => setLongoPrazoRange(e.target.value)} />
                                    <span class="badge bg-secondary ms-1">+{longoPrazoRange}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}



{/* <div className="col-12 card my-3">
                    <div className="card-body">
                        <div className="row d-flex justify-content-evenly">
                            <div className=" col-12 col-lg-3 text-center ">
                                <span className="text-danger me-1 ">Venda curto prazo</span> <br />
                                <span className="text-orange me-1 fs-5">R$</span>
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).valorIdealValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).valorIdealValue + ',00' : 0}</span>
                                <div className="d-flex">
                                    <input type="range" class="form-range" min="0" max="50" step="1" id="curtoPrazoRange" value={curtoPrazoRange} onChange={(e) => setCurtoPrazoRange(e.target.value)} />
                                    <span class="badge bg-secondary ms-1">-{longoPrazoRange}%</span>
                                </div>
                            </div>
                            {isMobile() ?
                                <hr />
                                :
                                <VerticalLine />
                            }
                            <div className=" col-12 col-lg-3 text-center ">
                                <span className="text-success me-1 ">Valor ideal</span> <br />
                                <span className="text-orange me-1 fs-5">R$</span>
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).valorIdealValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).valorIdealValue + ',00' : 0}</span>
                                <div className="d-flex">
                                    <input type="range" class="form-range" min="-50" max="50" step="1" id="valorIdealRange" value={valorIdealRange} onChange={(e) => setValorIdealRange(e.target.value)} />
                                    <span class="badge bg-secondary ms-1">+{valorIdealRange}%</span>
                                </div>
                            </div>
                            {isMobile() ?
                                <hr />
                                :
                                <VerticalLine />
                            }
                            <div className=" col-12 col-lg-3 text-center ">
                                <span className="text-warning me-1 ">Venda longo prazo</span> <br />
                                <span className="text-orange me-1 fs-5">R$</span>
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).valorIdealValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange).valorIdealValue + ',00' : 0}</span>
                                <div className="d-flex">
                                    <input type="range" class="form-range" min="0" max="50" step="1" id="longoPrazoRange" value={longoPrazoRange} onChange={(e) => setLongoPrazoRange(e.target.value)} />
                                    <span class="badge bg-secondary ms-1">+{longoPrazoRange}%</span>
                                </div>
                            </div>
                        </div>

                     </div>
                </div> */}