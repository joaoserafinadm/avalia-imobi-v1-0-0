import { useEffect, useState } from "react"
import Map from "../../valuation/Map"
import PropertyCard from "../../valuation/PropertyCard"
import PropertyUrlModal from "./PropertyUrlModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faStar, faWarning } from "@fortawesome/free-solid-svg-icons"
import Icons from "../../components/icons"
import tippy from "tippy.js"
import scrollTo from "../../../utils/scrollTo"
import styles from './valuation.module.scss'



export default function ValuationViewPage(props) {

    const clientData = props.clientData
    // const userData = props.userData


    const [valueSelected, setValueSelected] = useState('')

    useEffect(() => {
        if (valueSelected) scrollTo('continueButton')
    }, [valueSelected])


    console.log('clientData', clientData)



    return (
        <div className="col-12 ">



            <div className="row  d-flex justify-content-center align-items-center">
                <div className="card " style={{ height: '98vh', width: '98vw', overflowY: 'scroll' }} >
                    <div className="row d-flex">


                        <div className="col-12 d-flex justify-content-center my-5">
                            <div className="col-12 col-lg-8 text-center">
                                <span className="fs-4">
                                    Com base nas informações fornecidades sobre o seu imóvel, coletamos {clientData?.valuation?.propertyArray?.length} imóveis semelhantes para ter uma base de valores, tendo como critério de seleção as suas localizações e características.
                                </span>
                            </div>

                        </div>



                        <div className="card col-12 col-lg-7 my-5 bg-secondary" style={{ overflowX: 'scroll' }}>
                            <span className="text-white fw-bold">Imóveis de comparação</span>
                            <div className="d-flex">



                                {clientData?.valuation?.propertyArray?.map((elem, index) => {
                                    return (
                                        <span className="mx-2" style={{ width: '330px' }}>

                                            <PropertyCard section={'Todos Clientes'} valuationView
                                                elem={elem} index={index} setPropertyUrl={value => props.setPropertyUrl(value)}
                                            />
                                        </span>
                                    )
                                })}
                            </div>

                        </div>
                        <div className="col-12 col-lg-5 my-5 ">
                            <span className=" fw-bold">Localização</span>

                            <div className="">
                                <Map location={{ lat: clientData.latitude, lng: clientData.longitude }}
                                    zoom={30} height="450px" valuationPage
                                    porpertyLocations={clientData?.valuation?.propertyArray} />
                            </div>
                        </div>


                        <div className="col-12 text-center mt-5">
                            <span className="fw-bold fs-4">Valor de Avaliação</span>
                        </div>

                        <div className="row d-flex justify-content-center mb-5">
                            <div className="col-12 col-lg-8">
                                <div className="row d-flex">
                                    <div className="col-12  col-md-6 p-2">
                                        <div className="card">

                                            <div className="card-body text-center">
                                                <span className="bold fs-5">Valor do m²</span>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <span className="text-success me-1 fs-5">R$</span>
                                                    <span className="text-secondary fs-3 fw-bold">4.000,00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12  col-md-6 p-2">
                                        <div className="card">

                                            <div className="card-body text-center">
                                                <span className="bold fs-5">Área privativa</span>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <span className="text-secondary fs-3 fw-bold">{clientData?.areaTotalPrivativa}</span>
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
                                                    <span className="text-secondary fs-3 fw-bold">4.000,00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-12 d-flex justify-content-center mt-5 mb-3">
                            <div className="col-12 col-lg-8 text-center">

                                <span className="fs-4">
                                    Analisando os imóveis de comparação, chegamos nos seguintes valores de anúncio:
                                </span>
                            </div>

                        </div>
                        <span className="fw-bold text-center">Escolha o valor de sua preferência</span>
                        <div className="col-12 mb-5">

                            <div className="row d-flex justify-content-center ">
                                <div className="col-12 col-xxl-4 px-1 my-1">

                                    <span className={`card rounded-pill shadow cardAnimation ${valueSelected === 'curtoPrazoValue' ? 'border border-3 border-success shadow' : ''}`} type="button" onClick={() => setValueSelected('curtoPrazoValue')}>
                                        <div className={"card-body text-center "}>
                                            <div className={`${styles.cardIcon}`}>
                                                <div style={{
                                                    backgroundColor: '#00c661',
                                                }}>

                                                    <FontAwesomeIcon icon={faStar} className=" fs-3 text-white" />
                                                </div>
                                            </div>

                                            <span className=" fw-bold me-1 fs-3 " style={{ color: "#00c661" }}>
                                                Venda curto prazo
                                            </span> <br />
                                            <span className="text-success me-1 fs-5">R$</span>
                                            <span className="text-secondary fs-3 bold">{clientData?.valuation?.valuationCalc?.curtoPrazoValue !== 'NaN' ? clientData?.valuation?.valuationCalc?.curtoPrazoValue + ',00' : 0}</span>
                                        </div>
                                    </span>
                                </div>
                                <div className="col-12 col-xxl-4 px-1 my-1">

                                    <span className={`card rounded-pill shadow cardAnimation ${valueSelected === 'valorIdealValue' ? 'border border-3 border-success shadow' : ''}`} type="button" onClick={() => setValueSelected('valorIdealValue')}>
                                        <div className={"card-body text-center "}>
                                            <div className={`${styles.cardIcon}`}>

                                                <div style={{
                                                    backgroundColor: '#fbba27',
                                                }}>

                                                    <FontAwesomeIcon icon={faShoppingCart} className=" fs-3 text-white" />
                                                </div>
                                            </div>

                                            <span className=" fw-bold me-1 fs-3 " style={{ color: "#fbba27" }}>Venda ideal</span> <br />
                                            <span className="text-success me-1 fs-5">R$</span>
                                            <span className="text-secondary fs-3 bold">{clientData?.valuation?.valuationCalc?.valorIdealValue !== 'NaN' ? clientData?.valuation?.valuationCalc?.valorIdealValue + ',00' : 0}</span>
                                        </div>
                                    </span>
                                </div>
                                <div className="col-12 col-xxl-4 px-1 my-1">

                                    <span className={`card  rounded-pill shadow  cardAnimation ${valueSelected === 'longoPrazoValue' ? 'border border-3 border-success shadow' : ''}`} type="button" onClick={() => setValueSelected('longoPrazoValue')}>
                                        <div className={"card-body text-center "}>

                                            <div className={`${styles.cardIcon}`}>
                                                <div style={{
                                                    backgroundColor: '#e9083f',
                                                }}>

                                                    <FontAwesomeIcon icon={faWarning} className=" fs-3 text-white" />
                                                </div>
                                            </div>



                                            <span className=" fw-bold me-1 fs-3 " style={{ color: "#e9083f" }}>Venda longo prazo</span> <br />
                                            <span className="text-success me-1 fs-5">R$</span>
                                            <span className="text-secondary fs-3 bold">{clientData?.valuation?.valuationCalc?.longoPrazoValue !== 'NaN' ? clientData?.valuation?.valuationCalc?.longoPrazoValue + ',00' : 0}</span>
                                        </div>
                                    </span>
                                </div>


                                <div className="col-12 d-flex justify-content-center my-5 mb-5">
                                    <div className="text-center">
                                        {!valueSelected ?
                                            <>
                                                <button type="button" className="btn btn-secondary text-white fs-4" disabled >
                                                    Continuar <Icons icon="a-r" />
                                                </button>
                                                <br />
                                                <span className="small text-danger">Para continuar você deve selecionar o valor do imóvel </span>
                                            </>
                                            :
                                            <button type="button" className="btn btn-secondary text-white fs-4" data-bs-target="#valuationCarousel" data-bs-slide="next" id="continueButton">
                                                Continuar <Icons icon="a-r" />
                                            </button>
                                        }
                                    </div>

                                </div>


                            </div>

                        </div>



                    </div>



                </div>
            </div>

        </div>
    )
}