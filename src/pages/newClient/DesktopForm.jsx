import { useDispatch, useSelector } from "react-redux"
import { setCelular, setClientLastName, setClientName, setEmail } from "../../../store/NewClientForm/NewClientForm.actions"
import PropertyTypeCard from "../../addClient/PropertyTypeCard"
import TypeApartamento from "./TypeApartamento"
import GeralFeatures from "./GeralFeatures"
import Location from "./Location"
import UploadFiles from "./UploadFiles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import FinalizarButton from "./FinalizarButton"
import TypeCasa from "./TypeCasa"
import TypeComercial from "./TypeComercial"
import TypeTerreno from "./TypeTerreno"



export default function DesktopForm(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

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
        <div className="card m-3 fadeItem1s" style={{ height: "95%", overflowY: 'scroll', overflowX: 'hidden' }}>

            <div className="card-body">

                <div className="row mt-3">
                    <label for="geralForm" className="form-label fw-bold">Informações de Cadastro</label>


                    <div className="col-12 fadeItem">
                        <div className="row">

                            <div className="col-6 my-2  pe-1">

                                <label for="geralForm" className="form-label">Nome<b>*</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="clientNameItem"
                                    id="clientNameItem"
                                    value={newClientForm.clientName}
                                    onChange={e => dispatch(setClientName(e.target.value))} />
                            </div>
                            <div className="col-6 my-2  pe-1">

                                <label for="geralForm" className="form-label">Sobrenome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="clientLastNameItem"
                                    id="clientLastNameItem"
                                    value={newClientForm.clientLastName}
                                    onChange={e => dispatch(setClientLastName(e.target.value))} />
                            </div>
                            <div className="col-6 my-2  pe-1">

                                <label for="geralForm" className="form-label">Celular<b>*</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="celularItem"
                                    id="celularItem"
                                    value={newClientForm.celular}
                                    onChange={e => maskTelefone(e.target.value)} />
                            </div>
                            <div className="col-6 my-2  pe-1">

                                <label for="geralForm" className="form-label">E-mail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="emailItem"
                                    id="emailItem"
                                    value={newClientForm.email}
                                    onChange={e => dispatch(setEmail(e.target.value))} />
                            </div>


                        </div>

                    </div>
                    <span className="small mt-3">*Campos obrigatórios</span>

                </div>


                <div className="row fadeItem mt-3 pb-5">

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
                            <GeralFeatures  type="Apartamento"/>
                            <Location />
                            <UploadFiles setFiles={array => props.setFiles(array)} />
                            <FinalizarButton handleSave={() => props.handleSave()} loadingSave={props.loadingSave} />
                        </>
                    )}
                    {newClientForm.propertyType === "Casa" && (
                        <>
                            <TypeCasa />
                            <GeralFeatures type="Casa" />
                            <Location />
                            <UploadFiles setFiles={array => props.setFiles(array)} />
                            <FinalizarButton handleSave={() => props.handleSave()} loadingSave={props.loadingSave} />

                        </>
                    )}
                    {newClientForm.propertyType === "Comercial" && (
                        <>
                            <TypeComercial />
                            <GeralFeatures type="Comercial" />
                            <Location />
                            <UploadFiles setFiles={array => props.setFiles(array)} />
                            <FinalizarButton handleSave={() => props.handleSave()} loadingSave={props.loadingSave} />

                        </>
                    )}
                    {newClientForm.propertyType === "Terreno" && (
                        <>
                            <TypeTerreno />
                            <GeralFeatures type="Terreno" />
                            <Location />
                            <UploadFiles setFiles={array => props.setFiles(array)} />
                            <FinalizarButton handleSave={() => props.handleSave()} newClientForm={newClientForm} loadingSave={props.loadingSave} />

                        </>
                    )}

                </div >
            </div>

        </div>
    )


}