import { useRouter } from "next/router";
import Title from "../../src/components/title/Title2";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import navbarHide from "../../utils/navbarHide";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import baseUrl from "../../utils/baseUrl";
import { SpinnerLG, SpinnerSM } from "../../src/components/loading/Spinners";
import ClientInfo from "../../src/clientsManagement/ClientInfo";
import Sections from "../../src/components/Sections";
import ValuationConfig from "../../src/valuation/ValuationConfig";
import PropertyAdd from "../../src/valuation/PropertyAdd";
import { closeModal, showModal } from "../../utils/modalControl";
import { FixedTopicsBottom } from "../../src/components/fixedTopics";
import Link from "next/link";
import isMobile from "../../utils/isMobile";
import scrollTo from "../../utils/scrollTo";
import ShowValuationModal from "../../src/valuationPage/ShowValuationModal";



export default function ValuationPage(props) {

    const token = jwt.decode(Cookies.get("auth"));


    const router = useRouter();
    const dispatch = useDispatch()

    const [client, setClient] = useState()
    const [propertyArray, setPropertyArray] = useState([])
    const [valuationCalc, setValuationCalc] = useState('')
    const [calcVariables, setCalcVariables] = useState('')

    const [propertyArrayError, setPropertyArrayError] = useState('')

    const [loadingPage, setLoadingPage] = useState(true)
    const [loadingSave, setLoadingSave] = useState(false)
    const [section, setSection] = useState('Configurar avaliação')

    const [valuationUrl, setValuationUrl] = useState('')





    useEffect(() => {
        if (propertyArray.length >= 2) setPropertyArrayError('')
    }, [propertyArray.length])






    const { _id } = router.query;

    useEffect(() => {
        navbarHide(dispatch)
    }, [])

    useEffect(() => {
        if (_id) {

            dataFunction(token.company_id)
        }
    }, [_id])

    const dataFunction = async (company_id) => {


        await axios.get(`${baseUrl()}/api/valuation`, {
            params: {
                company_id,
                user_id: token.sub,
                client_id: _id
            }
        }).then(res => {
            setClient(res.data.client)
            setLoadingPage(false)
        }).catch(e => {
            console.log(e)
        })



    }


    const validate = () => {

        let propertyArrayError = ''

        if (propertyArray?.length < 2) propertyArrayError = "Adicione pelo menos 2 imóveis para comparação"

        if (propertyArrayError) {
            setPropertyArrayError(propertyArrayError)
            scrollTo("clientManage")
            return false
        } else {
            return true
        }
    }


    const handleSave = async (company_id) => {

        setSection('Configurar avaliação')

        const isValid = validate()

        if (isValid) {

            setLoadingSave(true)

            const data = {
                company_id,
                user_id: token.sub,
                client_id: _id,
                propertyArray,
                calcVariables,
                valuationCalc
            }


            await axios.post(`${baseUrl()}/api/valuation`, data)
                .then(res => {
                    setLoadingSave(false)
                    setValuationUrl(res.data.urlToken)
                    showModal('showValuationModal')


                }).catch(e => {
                    console.log(e)
                    setLoadingSave(false)
                })



        } else {
            return
        }


    }


    return (
        <div >
            <Title title={client && client?.clientName + " " + client?.clientLastName} subtitle="Avaliação do imóvel" backButton='/' />


            <ShowValuationModal valuationUrl={valuationUrl} token={token} />


            {loadingPage ?
                <SpinnerLG />
                :
                <div className="pagesContent-lg shadow fadeItem" id="pageTop">
                    <div className="container carousel  " data-bs-touch="false" data-bs-interval='false' id="clientManage">

                        <Sections section={section} idTarget="clientManage"
                            setSection={value => setSection(value)}
                            sections={["Configurar avaliação", "Informações do imóvel"]} />


                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <ValuationConfig client={client} propertyArrayError={propertyArrayError}
                                    setCalcVariables={value => setCalcVariables(value)}
                                    calcVariables={calcVariables}
                                    propertyArray={propertyArray} setPropertyArray={value => setPropertyArray(value)}
                                    setValuationCalc={value => setValuationCalc(value)}
                                    valuationCalc={valuationCalc}
                                />

                            </div>
                        </div>
                        <div className="carousel-inner ">
                            <div className="carousel-item ">
                                <ClientInfo client={client} />
                            </div>
                        </div>
                    </div>

                    {
                        <>
                        </>
                    }

                    {!isMobile() && <hr />}



                    <FixedTopicsBottom >

                        <div className="row">
                            <div className="col-12 d-flex justify-content-end align-items-center">
                                <Link href="/clientsManagement">
                                    <button className="btn btn-sm btn-secondary">Cancelar</button>
                                </Link>

                                <button className="btn btn-sm btn-orange ms-2"
                                    onClick={() => handleSave(token.company_id)} disabled={propertyArray.length === 0 || loadingSave}>
                                    {loadingSave ?
                                        <SpinnerSM />
                                        :
                                        "Salvar"
                                    }
                                </button>





                            </div>
                        </div>
                    </FixedTopicsBottom>


                </div>


            }
        </div>
    )



}