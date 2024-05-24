import { useEffect, useState } from "react";
import { SpinnerLG } from "../src/components/loading/Spinners";
import Title from "../src/components/title/Title2";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import baseUrl from "../utils/baseUrl";
import ClientCard from "../src/clientsManagement/ClientCard";
import Link from "next/link";
import ClientsManagementSections from "../src/clientsManagement/ClientsManagementSections";
import Pagination from "../src/clientsManagement/Pagination";
import ClientsPage from "../src/clientsManagement/ClientsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import navbarHide from "../utils/navbarHide";
import { useDispatch } from "react-redux";
import DeleteClientModal from "../src/clientsManagement/DeleteClientModal";
import ViewClientModal from "../src/clientsManagement/ViewClientModal";
import { showModal } from "../utils/modalControl";
import { usersArray } from "../store/Users/Users.actions";
import Sections from "../src/components/Sections";
import ViewValuationModal from "../src/clientsManagement/viewValuationModal";
import MenuBar from "../src/components/menuBar";
import tippy from "tippy.js";



export default function clientsManagement() {


    const token = jwt.decode(Cookies.get("auth"));
    const dispatch = useDispatch()


    const [loadingPage, setLoadingPage] = useState(true)
    const [clientsArray, setClientsArray] = useState([])
    const [allClients, setAllClients] = useState([])
    const [section, setSection] = useState('Meus Clientes')
    const [searchValue, setSearchValue] = useState('')
    const [clientSelected, setClientSelected] = useState('')
    const [clientsOrder, setClientsOrder] = useState('newest')
    const [typeSearch, setTypeSearch] = useState('')



    useEffect(() => {
        dataFunction(token.company_id)
        navbarHide(dispatch)
        const backdrop = document.querySelectorAll('.modal-backdrop.show');
        const body = document.querySelector('.modal-open');


        if (backdrop && body) {
            event.preventDefault();
            for (let i = 0; i < backdrop.length; i++) {
                backdrop[i].remove()
                body.style.overflow = ''
            }

        }
    }, [])
    

    useEffect(() => {

        const newClientsArray = handleClientsArray(allClients, clientsOrder)
        setClientsArray(newClientsArray)
    }, [searchValue, clientsOrder, typeSearch])

    const dataFunction = async (company_id) => {

        await axios.get(`${baseUrl()}/api/clientsManagement`, {
            params: {
                company_id: company_id
            }
        }).then(res => {

            const newUnitsArray = handleClientsArray(res.data.clients, clientsOrder)


            setAllClients(newUnitsArray)
            setClientsArray(newUnitsArray)
            dispatch(usersArray(res.data.users))
            setLoadingPage(false)



        }).catch(e => {
            setLoadingPage(false)
            console.log(e)
        })
    }

    const handleClientsArray = (clients, order) => {

        let newCLientsArray = clients


        if (order === 'newest') newCLientsArray = clients.slice().sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        if (order === 'oldest') newCLientsArray = clients.slice().sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))


        if (searchValue === '' && typeSearch === '') {
            return newCLientsArray
        } else if (searchValue !== '' && typeSearch === '') {
            return newCLientsArray.filter(elem => elem.clientName.toLowerCase().includes(searchValue.toLowerCase()))
        } else {
            return newCLientsArray.filter(elem => elem.clientName.toLowerCase().includes(searchValue.toLowerCase())).filter(elem => elem.propertyType === typeSearch)
        }







    }







    return (
        <div >
            <Title title={'Gestão de Clientes'} backButton='/' />

            <div className="pagesContent-lg shadow fadeItem" id="pageTop">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end ">

                        <Link href='/clientAdd'>
                            <button className="btn btn-sm btn-orange" id="teste">
                                <FontAwesomeIcon icon={faUserPlus} /> Adicionar Cliente
                            </button>
                        </Link>
                    </div>

                </div>
                <hr />

                {loadingPage ?
                    <SpinnerLG />
                    :
                    <>



                        <div className="row mt-3 fadeItem">
                            <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-start">

                                <div class="input-group mb-3">
                                    <input type="text"
                                        class="form-control"
                                        placeholder="Pesquisar"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        value={searchValue}
                                        onChange={e => setSearchValue(e.target.value)}
                                    />
                                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} className="icon" /></span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="clientsOrderSelect">Ordenar por:</label>
                                    <select class="form-select" id="clientsOrderSelect" value={clientsOrder} onChange={e => setClientsOrder(e.target.value)}>
                                        <option value="newest" selected>Mais recentes</option>
                                        <option value="oldest">Mais antigos</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                                <div class="input-group mb-3">
                                    <label class="input-group-text" for="clientsOrderSelect">Filtrar por:</label>
                                    <select class="form-select" id="clientsOrderSelect" value={typeSearch} onChange={e => setTypeSearch(e.target.value)}>
                                        <option value="" selected>Todos</option>
                                        <option value="Apartamento" selected>Apartamento</option>
                                        <option value="Casa" selected>Casa</option>
                                        <option value="Comercial" selected>Comercial</option>
                                        <option value="Terreno" selected>Terreno</option>

                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* <hr /> */}

                        <div className="container carousel  " data-bs-touch="false" data-bs-interval='false' id="clientsManagementSection">
                            <Sections
                                section={section} idTarget="clientsManagementSection"
                                setSection={value => setSection(value)}
                                sections={["Meus Clientes", "Todos Clientes"]} />


                            <div className="carousel-inner ">
                                <div className="carousel-item active">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-12" >
                                            <ClientsPage
                                                clients={clientsArray}
                                                section='Meus Clientes'
                                                user_id={token.sub}
                                                setClientSelected={value => setClientSelected(value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-12" >

                                            <ClientsPage
                                                clients={clientsArray}
                                                section='Todos Clientes'
                                                user_id={token.sub}
                                                setClientSelected={value => setClientSelected(value)} />
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>




                        <ViewClientModal clientSelected={clientSelected} />
                        <DeleteClientModal clientSelected={clientSelected} dataFunction={() => dataFunction(token.company_id)} />
                        <ViewValuationModal clientSelected={clientSelected} token={token} setClientSelected={value => setClientSelected(value)} />
                    </>

                }


            </div >




        </div>
    );
}