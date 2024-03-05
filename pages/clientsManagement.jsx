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



export default function clientsManagement() {


    const token = jwt.decode(Cookies.get("auth"));
    const dispatch = useDispatch()


    const [loadingPage, setLoadingPage] = useState(true)
    const [clientsArray, setClientsArray] = useState([])
    const [allClients, setAllClients] = useState([])
    const [section, setSection] = useState('myClients')
    const [searchValue, setSearchValue] = useState('')
    const [clientSelected, setClientSelected] = useState('')
    const [clientsOrder, setClientsOrder] = useState('newest')



    useEffect(() => {
        dataFunction(token.company_id)
        navbarHide(dispatch)

    }, [])

    useEffect(() => {
        handleClientsArray(allClients)
    }, [searchValue, clientsOrder])

    const dataFunction = async (company_id) => {

        await axios.get(`${baseUrl()}/api/clientsManagement`, {
            params: {
                company_id: company_id
            }
        }).then(res => {
            setAllClients(res.data.clients)
            setClientsArray(res.data.clients)
            dispatch(usersArray(res.data.users))
            setLoadingPage(false)
        }).catch(e => {
            setLoadingPage(false)
            console.log(e)
        })
    }

    const handleClientsArray = (clients) => {

        let newCLientsArray = clients

        console.log(clientsOrder,)

        if (clientsOrder === 'newest') newCLientsArray = clients.slice().sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        if (clientsOrder === 'oldest') newCLientsArray = clients.slice().sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))


        if (searchValue === '') {
            setClientsArray(newCLientsArray)
        } else {
            setClientsArray(newCLientsArray.filter(elem => elem.clientName.toLowerCase().includes(searchValue.toLowerCase())))
        }



    }







    return (
        <div >
            <Title title={'Gestão de Clientes'} backButton='/' />
            {loadingPage ?
                <SpinnerLG />
                :
                <div className="pagesContent-lg shadow fadeItem" id="pageTop">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end ">

                            <Link href='/clientAdd'>
                                <button className="btn btn-sm btn-orange">
                                   <FontAwesomeIcon icon={faUserPlus}/> Adicionar Cliente
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="row mt-3">
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
                    </div>

                    {/* <hr /> */}

                    <div className="container carousel  " data-bs-touch="false" data-bs-interval='false' id="clientsManagementSection">
                        <ClientsManagementSections section={section} setSection={value => setSection(value)} />

                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12" >
                                        <ClientsPage
                                            clients={clientsArray}
                                            section='myClients'
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
                                            section='allClients'
                                            user_id={token.sub}
                                            setClientSelected={value => setClientSelected(value)} />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>




                    <ViewClientModal clientSelected={clientSelected} />
                    <DeleteClientModal clientSelected={clientSelected} dataFunction={() => dataFunction(token.company_id)} />


                </div >




            }
        </div>
    );
}