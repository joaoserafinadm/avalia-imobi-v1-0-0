
import { useDispatch, useSelector } from "react-redux"
import Title from "../components/title/Title2"
import { useEffect, useState } from "react"
import { FixedTopicsBottom } from "../components/fixedTopics"
import Link from "next/link"
import { SpinnerSM } from "../components/loading/Spinners"
import { initialValues, setCelular, setClientLastName, setClientName, setEmail, setPropertyLink, setPropertyName, setPropertyPrice, setPropertyType } from "../../store/NewClientForm/NewClientForm.actions"
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
import UploadFilesValuation from "./UploadFilesValuation"
import Info from "../components/info"
import { maskMoney } from "../../utils/mask"

export default function PropertyAdd(props) {


    const token = jwt.decode(Cookies.get("auth"));




    const alertsArray = useSelector(state => state.alerts)
    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    const router = useRouter()






    const [manualRegister, setManualRegister] = useState(false)

    const [loadingSave, setLoadingSave] = useState(false)

    const [files, setFiles] = useState([])

    useEffect(() => {
        console.log("files", files)
    }, [files.length])



    useEffect(() => {
        dispatch(initialValues())
        dispatch(setPropertyType(props.client.propertyType))

        navbarHide(dispatch)

    }, [])


    // const handleLinkImages = async (link) => {

    //     await axios.post(`${baseUrl()}/api/valuation/linkImages`, { link: newClientForm.propertyLink })
    //         .then(res => {
    //             setFiles(res.data)
    //         }).catch(e => {
    //             console.log(e)
    //         })
    // }

    const handlePropertyAdd = (property) => {

        const newPropertyArray = props.propertyArray

        newPropertyArray.push(property)

        props.setPropertyArray(newPropertyArray)
        props.setForceUpdate()

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
                                        <div className="d-flex align-items-bottom">

                                            <label for="propertyNameItem" className="form-label">Nome do Imóvel</label>
                                            <Info className='ms-1' id='propertyNameInfo'
                                                content='Insira o nome que consta no anúncio, ou um nome contendo as características gerais do imóvel.' />
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="propertyNameItem"
                                            id="propertyNameItem"
                                            value={newClientForm.propertyName}
                                            onChange={e => dispatch(setPropertyName(e.target.value))} />
                                    </div>
                                    <div className="col-12 my-2  pe-1">
                                        <div className="d-flex align-items-bottom">

                                            <label for="propertyLinkItem" className="form-label">Link do Imóvel</label>
                                            <Info className='ms-1' id='linkImagesInfo'
                                                content='Ao inserir o link, o sistema irá buscar pelas imagens do imóvel.' />
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="propertyLinkItem"
                                            id="propertyLinkItem"
                                            // onBlur={e => handleLinkImages(e.target.value)}
                                            value={newClientForm.propertyLink}
                                            onChange={e => dispatch(setPropertyLink(e.target.value))} />
                                    </div>

                                    <div className="col-12 my-2  pe-1">

                                        <label for="propertyPriceItem" className="form-label">Valor do Imóvel</label>
                                        <div class="input-group mb-3">
                                            <span className="input-group-text">R$</span>
                                            <input
                                                type="text"
                                                className="form-control text-end"
                                                name="propertyPriceItem"
                                                id="propertyPriceItem"
                                                value={newClientForm.propertyPrice}
                                                onChange={e => dispatch(setPropertyPrice(maskMoney(e.target.value)))} />
                                            <span className="input-group-text">,00</span>


                                        </div>
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
                                        <UploadFilesValuation setFiles={array => setFiles(array)} files={files} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Casa" && (
                                    <>
                                        <TypeCasa />
                                        <GeralFeatures type="Casa" />
                                        <Location />
                                        <UploadFilesValuation setFiles={array => setFiles(array)} files={files} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Comercial" && (
                                    <>
                                        <TypeComercial />
                                        <GeralFeatures type="Comercial" />
                                        <Location />
                                        <UploadFilesValuation setFiles={array => setFiles(array)} files={files} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Terreno" && (
                                    <>
                                        <TypeTerreno />
                                        <GeralFeatures type="Terreno" />
                                        <Location />
                                        <UploadFilesValuation setFiles={array => setFiles(array)} files={files} />
                                    </>
                                )}



                            </div >



                        </div>



                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal" >Cancelar</button>
                        <button type="button" className="btn btn-sm btn-orange" data-bs-dismiss="modal" onClick={() => handlePropertyAdd(newClientForm)}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}