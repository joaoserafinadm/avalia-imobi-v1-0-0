
import { useDispatch, useSelector } from "react-redux"
import Title from "../components/title/Title2"
import { useEffect, useState } from "react"
import { FixedTopicsBottom } from "../components/fixedTopics"
import Link from "next/link"
import { SpinnerSM } from "../components/loading/Spinners"
import { initialValues, setCelular, setClientLastName, setClientName, setEmail, setPropertyLink, setPropertyName, setPropertyType } from "../../store/NewClientForm/NewClientForm.actions"
import TypeApartamento from "../pages/newClient/TypeApartamento"
import GeralFeatures from "../pages/newClient/GeralFeatures"
import UploadFiles from "../pages/newClient/UploadFiles"
import Location from "../pages/newClient/Location"
import PropertyTypeCard from "../addClient/PropertyTypeCard"
import navbarHide from "../../utils/navbarHide"
import { createImageUrl } from "../../utils/createImageUrl"
import { useRouter } from "next/router"
import baseUrl from "../../utils/baseUrl"
import axios from "axios"
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { addAlert } from "../../store/Alerts/Alerts.actions"
import TypeCasa from "../pages/newClient/TypeCasa"
import TypeComercial from "../pages/newClient/TypeComercial"
import TypeTerreno from "../pages/newClient/TypeTerreno"

export default function PropertyAdd(props) {


    const token = jwt.decode(Cookies.get("auth"));




    const alertsArray = useSelector(state => state.alerts)
    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    const router = useRouter()

    useEffect(() => {

        dispatch(setPropertyType(props.client.propertyType))
    }, [])




    const [manualRegister, setManualRegister] = useState(false)

    const [loadingSave, setLoadingSave] = useState(false)

    const [files, setFiles] = useState([])



    useEffect(() => {
        dispatch(initialValues())
        navbarHide(dispatch)

    }, [])



    const maskTelefone = (value) => {
        return dispatch(setCelular(value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1'))
        )
    }


    return (
        <div class="modal fade" id="propertyAddModal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title-dark bold">Adicionar imóvel</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row mt-3">
                            <label for="geralForm" className="form-label fw-bold">Informações de Cadastro</label>


                            <div className="col-12 fadeItem">
                                <div className="row">

                                    <div className="col-12 my-2  pe-1">

                                        <label for="propertyNameItem" className="form-label">Nome do Imóvel</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="propertyNameItem"
                                            id="propertyNameItem"
                                            value={newClientForm.propertyName}
                                            onChange={e => dispatch(setPropertyName(e.target.value))} />
                                    </div>
                                    <div className="col-12 my-2  pe-1">

                                        <label for="propertyLinkItem" className="form-label">Link do Imóvel</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="propertyLinkItem"
                                            id="propertyLinkItem"
                                            value={newClientForm.propertyLink}
                                            onChange={e => dispatch(setPropertyLink(e.target.value))} />
                                    </div>


                                </div>

                            </div>
                            <span className="small mt-3">*Campos obrigatórios</span>



                            <div className="col-12 fadeItem mt-3 pb-5">

                                <label for="geralForm" className="form-label fw-bold">Informações do Imóvel</label>

                                <div className="col-12  my-2">
                                    <label for="clientNameItem" className="form-label ">Selecione o tipo de imóvel:</label>

                                    <div className="row">


                                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                                            <PropertyTypeCard type="Apartamento" />
                                        </div>
                                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                                            <PropertyTypeCard type="Casa" />
                                        </div>
                                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                                            <PropertyTypeCard type="Comercial" />
                                        </div>
                                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                                            <PropertyTypeCard type="Terreno" />
                                        </div>
                                    </div>


                                </div>
                                {newClientForm.propertyType === "Apartamento" && (
                                    <>
                                        <TypeApartamento />
                                        <GeralFeatures type="Apartamento" />
                                        <Location />
                                        <UploadFiles setFiles={array => setFiles(array)} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Casa" && (
                                    <>
                                        <TypeCasa />
                                        <GeralFeatures type="Casa" />
                                        <Location />
                                        <UploadFiles setFiles={array => setFiles(array)} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Comercial" && (
                                    <>
                                        <TypeComercial />
                                        <GeralFeatures type="Comercial" />
                                        <Location />
                                        <UploadFiles setFiles={array => setFiles(array)} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Terreno" && (
                                    <>
                                        <TypeTerreno />
                                        <GeralFeatures type="Terreno" />
                                        <Location />
                                        <UploadFiles setFiles={array => setFiles(array)} />
                                    </>
                                )}



                            </div >



                        </div>



                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal" >Cancelar</button>
                        <button type="button" className="btn btn-sm btn-orange" data-bs-dismiss="modal" >Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}