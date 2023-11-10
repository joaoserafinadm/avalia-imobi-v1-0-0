import { useState } from "react";
import { SpinnerLG, SpinnerSM } from "../src/components/loading/Spinners";
import Title from "../src/components/title/Title2";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { FixedTopicsBottom } from "../src/components/fixedTopics";
import Link from "next/link";
import PropertyTypeCard from "../src/addClient/PropertyTypeCard";
import navbarHide from "../utils/navbarHide";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import scrollTo from "../utils/scrollTo";
import baseUrl from "../utils/baseUrl";
import axios from "axios";
import { useRouter } from "next/router";
import { addAlert } from "../store/Alerts/Alerts.actions";
import { ObjectId } from "bson";







export default function addClient() {

    const token = jwt.decode(Cookies.get("auth"));
    const dispatch = useDispatch()
    const alertsArray = useSelector(state => state.alerts)

    //states
    const [clientName, setClientName] = useState('')
    const [clientLastName, setClientLastName] = useState('')
    const [celular, setCelular] = useState('')
    const [email, setEmail] = useState('')
    const [propertyType, setPropertyType] = useState('')

    //render
    const [manualRegister, setManualRegister] = useState(false)

    //Loading
    const [loadingPage, setLoadingPage] = useState(false)
    const [loadingSave, setLoadingSave] = useState(false)
    const [loadingSaveLink, setLoadingSaveLink] = useState(false)


    useEffect(() => {

        dataFunction(token.company_id)
        navbarHide(dispatch)

    }, [])


    const dataFunction = (company_id) => {

    }


    const handleSave = () => {

    }
    const handleSaveLink = (company_id) => {

        setLoadingSave(true)

        const isValid = true

        if (isValid) {

            const data = {
                company_id: token.company_id,
                user_id: token.sub,
                clientName: clientName,
                clientLastName: clientLastName,
                celular: celular,
                propertyType: propertyType
            }

            axios.post(`${baseUrl()}/api/addClient`, data).then(res => {

                console.log(res)

                const alert = {
                    type: 'addUserLink',
                    message: 'Cliente adicionado com sucesso! Compartilhar o formulário?',
                    link: res.data
                }

                console.log("alertsArray", alertsArray)

                dispatch(addAlert(alertsArray, [alert]))




            })


        }
        setLoadingSave(false)
        setLoadingSave(false)

    }



    return (
        <div >
            <Title title={'Adicionar cliente'} backButton='/' />
            <div className="pagesContent shadow fadeItem" id="pageTop">
                <div className="row d-flex ">
                    <label for="telefoneItem" className="form-label fw-bold">Informações do cliente</label>
                    <div className="col-12 col-lg-6 my-2">
                        <label for="clientNameItem" className="form-label ">Nome*</label>
                        <input type="text" className="form-control form-control-sm" id="clientNameItem" value={clientName} onChange={e => setClientName(e.target.value)} placeholder="" />
                    </div>
                    <div className="col-12 col-lg-6 my-2 fadelItem">
                        <label for="clientLastNameItem" className="form-label ">Sobrenome (opcional)</label>
                        <input type="text" className="form-control form-control-sm" id="clientLastNameItem" value={clientLastName} onChange={e => setClientLastName(e.target.value)} placeholder="" />
                    </div>
                    {manualRegister && (
                        <>

                            <div className="col-12 col-lg-6 my-2 fadeItem">
                                <label for="celularItem" className="form-label ">Celular*</label>
                                <input type="text" className="form-control form-control-sm" id="celularItem" value={celular} onChange={e => setCelular(e.target.value)} placeholder="" />
                            </div>
                            <div className="col-12 col-lg-6 my-2 fadeItem">
                                <label for="emailItem" className="form-label ">Email*</label>
                                <input type="text" className="form-control form-control-sm" id="emailItem" value={email} onChange={e => setEmail(e.target.value)} placeholder="" />
                            </div>
                        </>
                    )}
                </div>

                {manualRegister && (
                    <>

                        <div className="row fadeItem mt-3">
                            <label for="telefoneItem" className="form-label fw-bold">Informações do Imóvel</label>
                            <div className="col-12  my-2">
                                <label for="clientNameItem" className="form-label ">Tipo do imóvel*</label>

                                <div className="row">


                                    <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                                        <PropertyTypeCard type="Apartamento" setPropertyType={(value) => { setPropertyType(value); scrollTo('propertyInfo') }} propertyType={propertyType} />
                                    </div>
                                    <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                                        <PropertyTypeCard type="Casa" setPropertyType={(value) => { setPropertyType(value); scrollTo('propertyInfo') }} propertyType={propertyType} />
                                    </div>
                                    <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                                        <PropertyTypeCard type="Comercial" setPropertyType={(value) => { setPropertyType(value); scrollTo('propertyInfo') }} propertyType={propertyType} />
                                    </div>
                                    <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                                        <PropertyTypeCard type="Terreno" setPropertyType={(value) => { setPropertyType(value); scrollTo('propertyInfo') }} propertyType={propertyType} />
                                    </div>
                                </div>


                            </div>
                        </div>



                        {propertyType && (
                            <div className="row mt-3 fadeItem" id="propertyInfo" style={{ height: '250px' }}>
                                <label for="telefoneItem" className="form-label fw-bold">{propertyType}</label>

                            </div>
                        )}



                    </>

                )}


                <hr />
                <FixedTopicsBottom >

                    <div className="row">
                        <div className="col-12 d-flex justify-content-end align-items-center">
                            <Link href="/">
                                <button className="btn btn-sm btn-secondary">Cancelar</button>
                            </Link>






                            {manualRegister ?

                                <button className="btn btn-sm btn-secondary ms-2 fadeItem" onClick={() => setManualRegister(false)}>Cadastro resumido</button>
                                :
                                <button className="btn btn-sm btn-secondary ms-2 fadeItem" onClick={() => setManualRegister(true)}>Cadastro manual</button>

                            }
                            {loadingSave ?
                                <button className="ms-2 btn btn-sm btn-orange px-4" disabled><SpinnerSM /></button>
                                :
                                <>
                                    {manualRegister ?
                                        <button className="ms-2 btn btn-sm btn-orange fadeItem" disabled={!clientName} onClick={() => handleSave(token.company_id)}>Cadastrar</button>
                                        :
                                        <button className="ms-2 btn btn-sm btn-orange fadeItem" disabled={!clientName} onClick={() => handleSaveLink(token.company_id)}>Salvar e enviar link</button>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </FixedTopicsBottom>
            </div>
        </div>
    )
}