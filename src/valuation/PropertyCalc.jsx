import { useEffect, useState } from "react";
import valuationCalc from "./valuationCalc";



export default function PropertyCalc(props) {

    const propertyArray = props.propertyArray
    const client = props.client

    const [valorIdealRange, setValorIdealRange] = useState(0)
    const [curtoPrazoRange, setCurtoPrazoRange] = useState(7)
    const [longoPrazoRange, setLongoPrazoRange] = useState(7)
    const [valuationCalcResult, setValuationCalcResult] = useState('')

    const [calcPrivativa, setCalcPrivativa] = useState(true)

    useEffect(() => {
        const result = valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange, calcPrivativa)

        const calcVariables = {
            valorIdealRange,
            curtoPrazoRange,
            longoPrazoRange,
            calcPrivativa
        }

        props.setCalcVariables(calcVariables)

        setValuationCalcResult(result)
        props.setValuationCalc(result)

    }, [propertyArray.length, client, valorIdealRange, curtoPrazoRange, longoPrazoRange, calcPrivativa])


    const resetCalc = () => {
        setValorIdealRange(0)
        setCurtoPrazoRange(7)
        setLongoPrazoRange(7)
        setCalcPrivativa(true)
    }

    return (
        <div className="col-12 my-5 fadeItem">
            <label htmlFor="" className="fw-bold mb-2">Cálculo</label>
            {/*  */}

            <div className="row">
                <div className="col-12">

                    <div class="form-check">
                        <input class="form-check-input" type="radio"
                            name="calcPrivativaCheck" onClick={() => setCalcPrivativa(true)}
                            id="calcPrivativaTrue" checked={calcPrivativa} />
                        <label class="form-check-label" for="calcPrivativaTrue">
                            Cálculo baseado na <b>área privativa</b>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio"
                            name="calcPrivativaCheck" onClick={() => setCalcPrivativa(false)}
                            id="calcPrivativaFalse" checked={!calcPrivativa} />
                        <label class="form-check-label" for="calcPrivativaFalse">
                            Cálculo baseado na <b>área total</b>
                        </label>
                    </div>
                </div>
            </div>


            <div className="row d-flex px-2">

                <div className="col-12 col-lg-4 px-1 my-1">

                    <div className="card ">
                        <div className="card-body text-center ">
                            <span className="text-secondary fw-bold me-1 ">Venda curto prazo</span> <br />
                            <span className="text-orange me-1 fs-5">R$</span>
                            <span className="text-secondary fs-4 bold">{valuationCalcResult?.curtoPrazoValue !== 'NaN' ? valuationCalcResult?.curtoPrazoValue + ',00' : 0}</span>
                            <div className="d-flex mt-3">
                                <input type="range" class="form-range" min="0" max="50" step="1" id="longoPrazoRange" value={curtoPrazoRange} onChange={(e) => setCurtoPrazoRange(e.target.value)} style={{ transform: 'rotate(180deg)' }} />
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
                            <span className="text-secondary fs-4 bold">{valuationCalcResult?.valorIdealValue !== 'NaN' ? valuationCalcResult?.valorIdealValue + ',00' : 0}</span>
                            <div className="d-flex mt-3">
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
                            <span className="text-secondary fs-4 bold">{valuationCalcResult?.longoPrazoValue !== 'NaN' ? valuationCalcResult?.longoPrazoValue + ',00' : 0}</span>
                            <div className="d-flex mt-3">
                                <input type="range" class="form-range" min="0" max="50" step="1" id="longoPrazoRange" value={longoPrazoRange} onChange={(e) => setLongoPrazoRange(e.target.value)} />
                                <span class="badge bg-secondary ms-1">+{longoPrazoRange}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => resetCalc()}>
                        Redefinir Cálculo
                    </button>
                </div>
            </div>



        </div>
    )

}









{/* <div className="col-12 card my-3">
                    <div className="card-body">
                        <div className="row d-flex justify-content-evenly">
                            <div className=" col-12 col-lg-3 text-center ">
                                <span className="text-danger me-1 ">Venda curto prazo</span> <br />
                                <span className="text-orange me-1 fs-5">R$</span>
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange, calcPrivativa).valorIdealValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange, calcPrivativa).valorIdealValue + ',00' : 0}</span>
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
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange, calcPrivativa).valorIdealValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange, calcPrivativa).valorIdealValue + ',00' : 0}</span>
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
                                <span className="text-secondary fs-4 bold">{valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange, calcPrivativa).valorIdealValue !== 'NaN' ? valuationCalc(propertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange, calcPrivativa).valorIdealValue + ',00' : 0}</span>
                                <div className="d-flex">
                                    <input type="range" class="form-range" min="0" max="50" step="1" id="longoPrazoRange" value={longoPrazoRange} onChange={(e) => setLongoPrazoRange(e.target.value)} />
                                    <span class="badge bg-secondary ms-1">+{longoPrazoRange}%</span>
                                </div>
                            </div>
                        </div>

                     </div>
                </div> */}