import { useEffect, useState } from "react";



export default function ValuationPropertyCalc(props) {

    const client = props.client
    const valuation = props.client?.valuation




    return (
        <div className="col-12 my-5 fadeItem">

            {/*  */}

            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <span htmlFor="" className="fw-bold mb-2">Valor de Avaliação</span>

                </div>

            </div>
            <div className="row d-flex justify-content-center mb-5">
                <div className="col-12 col-lg-12 ">
                    <div className="row d-flex px-1">
                        <div className="col-12  col-md-6 p-2">
                            <div className="card">

                                <div className="card-body text-center">
                                    <span className="bold fs-5">Valor do m²</span>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="text-success me-1 fs-5">R$</span>
                                        <span className="text-secondary fs-3 fw-bold">{valuation?.valuationCalc?.valorMetroQuadrado},00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-md-6 p-2">
                            <div className="card">

                                <div className="card-body text-center">
                                    <span className="bold fs-5">{valuation?.calcVariables?.calcPrivativa ? "Área privativa" : "Área total"}</span>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="text-secondary fs-3 fw-bold">{valuation?.calcVariables?.calcPrivativa ? client?.areaTotalPrivativa : client?.areaTotal}</span>
                                        <span className="text-success ms-1 fs-5">m²</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-md-6 p-2">
                            <div className="card">

                                <div className="card-body text-center">
                                    <span className="bold fs-5">Fórmula</span>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="text-secondary fs-3 fw-bold"><b>AT</b> x <b>Vm²</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-md-6 p-2">
                            <div className="card">

                                <div className="card-body text-center">
                                    <span className="bold fs-5">Valor</span>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="text-success me-1 fs-5">R$</span>
                                        <span className="text-secondary fs-3 fw-bold">{valuation?.valuationCalc?.valorAvaliacao},00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-12 d-flex justify-content-center">
                <span htmlFor="" className="fw-bold mb-2">Valor de anúncio</span>
            </div>

            <div className="row">
                <div className="col-12 text-center">
                    <span>{valuation?.calcVariables?.calcPrivativa ? 'Baseado na área privativa' : 'baseado na área total'}</span>
                </div>
            </div>


            <div className="row d-flex px-2 px-lg-5 px-4">

                <div className="col-12 col-lg-4 px-1 my-1">

                    <div className={`card ${valuation?.valueSelected === 'curtoPrazoValue' && 'pulse border border-success border-2'}`}>
                        <div className="card-body text-center ">
                            <span className="text-secondary fw-bold me-1 ">Venda curto prazo</span> <br />
                            <span className="text-orange me-1 fs-5">R$</span>
                            <span className="text-secondary fs-4 bold">{valuation?.valuationCalc?.curtoPrazoValue !== 'NaN' ? valuation?.valuationCalc?.curtoPrazoValue + ',00' : 0}</span>
                            <div className="d-flex justify-content-center mt-1 ">

                                <span class="badge bg-secondary ms-1 ">-{valuation?.calcVariables?.curtoPrazoRange}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 px-1 my-1">

                    <div className={`card ${valuation?.valueSelected === 'valorIdealValue' && 'pulse border border-success border-2'}`}>
                        <div className="card-body text-center ">
                            <span className="text-secondary fw-bold me-1 ">Valor ideal</span> <br />
                            <span className="text-orange me-1 fs-5">R$</span>
                            <span className="text-secondary fs-4 bold">{valuation?.valuationCalc?.valorIdealValue !== 'NaN' ? valuation?.valuationCalc?.valorIdealValue + ',00' : 0}</span>
                            <div className="d-flex justify-content-center mt-1 ">

                                <span class="badge bg-secondary ms-1">{valuation?.calcVariables?.valorIdealRange}%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 px-1 my-1">

                    <div className={`card ${valuation?.valueSelected === 'longoPrazoValue' && 'pulse border border-success border-2'}`}>
                        <div className="card-body text-center ">
                            <span className="text-secondary fw-bold me-1 ">Venda longo prazo</span> <br />
                            <span className="text-orange me-1 fs-5">R$</span>
                            <span className="text-secondary fs-4 bold">{valuation?.valuationCalc?.longoPrazoValue !== 'NaN' ? valuation?.valuationCalc?.longoPrazoValue + ',00' : 0}</span>
                            <div className="d-flex justify-content-center mt-1 ">
                                <span class="badge bg-secondary ms-1">+{valuation?.calcVariables?.longoPrazoRange}%</span>
                            </div>
                        </div>
                    </div>
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