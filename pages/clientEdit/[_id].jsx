import { useDispatch, useSelector } from "react-redux"
import Title from "../../src/components/title/Title2"
import { useEffect, useState } from "react"
import { FixedTopicsBottom } from "../../src/components/fixedTopics"
import Link from "next/link"
import { SpinnerLG, SpinnerSM } from "../../src/components/loading/Spinners"
import { initialValues, setAndar, setAreaTotal, setAreaTotalPrivativa, setBairro, setBanheiros, setCelular, setCep, setCidade, setClientLastName, setClientName, setComments, setEmail, setFeatures, setLatitude, setLogradouro, setLongitude, setNumero, setPavimentos, setPropertyType, setQuartos, setSacadas, setSalas, setSuites, setUf, setVagasGaragem } from "../../store/NewClientForm/NewClientForm.actions"
import TypeApartamento from "../../src/pages/newClient/TypeApartamento"
import GeralFeatures from "../../src/pages/newClient/GeralFeatures"
import UploadFiles from "../../src/pages/newClient/UploadFiles"
import Location from "../../src/pages/newClient/Location"
import PropertyTypeCard from "../../src/addClient/PropertyTypeCard"
import navbarHide from "../../utils/navbarHide"
import { createImageUrl } from "../../utils/createImageUrl"
import { useRouter } from "next/router"
import baseUrl from "../../utils/baseUrl"
import axios from "axios"
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { addAlert } from "../../store/Alerts/Alerts.actions"
import TypeCasa from "../../src/pages/newClient/TypeCasa"
import TypeComercial from "../../src/pages/newClient/TypeComercial"
import TypeTerreno from "../../src/pages/newClient/TypeTerreno"
import { closeModal } from "../../utils/modalControl"



export default function clientAdd() {

    const token = jwt.decode(Cookies.get("auth"));



    const alertsArray = useSelector(state => state.alerts)
    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    const router = useRouter()

    const client_id = router.query._id


    const [manualRegister, setManualRegister] = useState(false)

    const [loadingPage, setLoadingPage] = useState(true)
    const [loadingSave, setLoadingSave] = useState(false)

    const [files, setFiles] = useState([])



    useEffect(() => {
        const backdrop = document.querySelectorAll('.modal-backdrop.show');
        const body = document.querySelector('.modal-open');


        if (backdrop && body) {
            event.preventDefault();
            for (let i = 0; i < backdrop.length; i++) {
                backdrop[i].remove()
                body.style.overflow = ''
            }

        }
        navbarHide(dispatch)

    }, [])


    useEffect(() => {
        dispatch(initialValues())

        if (client_id) {
            dataFunction(token.company_id)
        }
    }, [client_id])


    const dataFunction = async (company_id) => {

        await axios.get(`${baseUrl()}/api/clientEdit`, {
            params: {
                company_id: company_id,
                client_id: client_id
            }
        }).then(res => {
            const client = res.data
            console.log("client", client)
            dispatch(setClientName(client.clientName))
            dispatch(setClientLastName(client.clientLastName))
            dispatch(setEmail(client.email))
            dispatch(setCelular(client.celular))
            dispatch(setPropertyType(client.propertyType))
            dispatch(setAreaTotal(+client.areaTotal))
            dispatch(setAreaTotalPrivativa(+client.areaTotalPrivativa))
            dispatch(setAndar(client.andar))
            dispatch(setBanheiros(client.banheiros))
            dispatch(setQuartos(client.quartos))
            dispatch(setSacadas(client.sacadas))
            dispatch(setSuites(client.suites))
            dispatch(setVagasGaragem(client.vagasGaragem))
            dispatch(setPavimentos(client.pavimentos))
            dispatch(setSalas(client.salas))
            dispatch(setCep(client.cep))
            dispatch(setCidade(client.cidade))
            dispatch(setUf(client.uf))
            dispatch(setLogradouro(client.logradouro))
            dispatch(setNumero(client.numero))
            dispatch(setBairro(client.bairro))
            dispatch(setLatitude(client.latitude))
            dispatch(setLongitude(client.longitude))
            dispatch(setFeatures(client.features))
            setFiles(client.files)
            dispatch(setComments(client.comments))

            console.log("client", client.files)



            setLoadingPage(false)

        }).catch(e => {
            setLoadingPage(false)
            console.log(e)
        })


    }

    const handleClientValues = () => {

    }



    const maskTelefone = (value) => {
        return dispatch(setCelular(value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1'))
        )
    }




    const handleSave = async (form) => {

        setLoadingSave(true)

        const newFiles = files.filter(elem => !elem.url)

        const filesUrl = newFiles.length > 0 ? await createImageUrl(newFiles, 'CLIENT_FILES') : []

        const filesArray = files.filter(elem => elem.url).concat(filesUrl)


        const data = {
            ...form,
            company_id: token.company_id,
            client_id: client_id,
            user_id: token.sub,
            files:filesArray
        }



        await axios.patch(`${baseUrl()}/api/clientEdit`, data)
            .then(res => {
                setLoadingSave(false)

                const alert = {
                    type: 'alert',
                    message: `Cliente ${newClientForm.clientName} atualizado com sucesso!`,
                    link: res.data
                }

                dispatch(addAlert(alertsArray, [alert]))


                router.push('/clientsManagement')
            }).catch(e => {
                setLoadingSave(false)
            })

    }




    return (
        <div >
            {loadingPage ?
                <SpinnerLG />
                :
                <>
                    <Title title={'Adicionar cliente'} backButton />
                    <div className="pagesContent shadow fadeItem" id="pageTop">
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
                                    <div className="col-6 my-2 fadeItem pe-1">

                                        <label for="geralForm" className="form-label">Celular<b>*</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="celularItem"
                                            id="celularItem"
                                            value={newClientForm.celular}
                                            onChange={e => maskTelefone(e.target.value)} />
                                    </div>
                                    <div className="col-6 my-2 fadeItem pe-1">

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



                            <div className="col-12 fadeItem mt-3 pb-5">

                                <label for="geralForm" className="form-label fw-bold">Informações do Imóvel</label>

                                <div className="col-12  my-2">
                                    <label for="clientNameItem" className="form-label ">Selecione o tipo de imóvel:</label>

                                    <div className="row">


                                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                                            <PropertyTypeCard type="Apartamento" edit />
                                        </div>
                                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                                            <PropertyTypeCard type="Casa" edit />
                                        </div>
                                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                                            <PropertyTypeCard type="Comercial" edit />
                                        </div>
                                        <div className="my-2 col-xxl-3 col-6 d-flex justify-content-center">
                                            <PropertyTypeCard type="Terreno" edit />
                                        </div>
                                    </div>


                                </div>
                                {newClientForm.propertyType === "Apartamento" && (
                                    <>
                                        <TypeApartamento />
                                        <GeralFeatures type="Apartamento" />
                                        <Location />
                                        <UploadFiles setFiles={array => setFiles(array)} files={files} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Casa" && (
                                    <>
                                        <TypeCasa />
                                        <GeralFeatures type="Casa" />
                                        <Location />
                                        <UploadFiles setFiles={array => setFiles(array)} files={files} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Comercial" && (
                                    <>
                                        <TypeComercial />
                                        <GeralFeatures type="Comercial" />
                                        <Location />
                                        <UploadFiles setFiles={array => setFiles(array)} files={files} />
                                    </>
                                )}
                                {newClientForm.propertyType === "Terreno" && (
                                    <>
                                        <TypeTerreno />
                                        <GeralFeatures type="Terreno" />
                                        <Location />
                                        <UploadFiles setFiles={array => setFiles(array)} files={files} />
                                    </>
                                )}



                            </div >




                        </div>



                        <hr />
                        <FixedTopicsBottom >

                            <div className="row">
                                <div className="col-12 d-flex justify-content-end align-items-center">
                                    <Link href="/clientsManagement">
                                        <button className="btn btn-sm btn-secondary">Cancelar</button>
                                    </Link>


                                    {loadingSave ?
                                        <button className="ms-2 btn btn-sm btn-orange px-5" disabled><SpinnerSM /></button>
                                        :
                                        <>
                                            <button className="ms-2 btn btn-sm btn-orange fadeItem" disabled={!newClientForm.clientName || !newClientForm.propertyType} onClick={() => handleSave(newClientForm)}>Salvar</button>
                                        </>
                                    }
                                </div>
                            </div>
                        </FixedTopicsBottom>
                    </div>
                </>
            }
        </div>
    )
}