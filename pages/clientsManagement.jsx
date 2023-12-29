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
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import navbarHide from "../utils/navbarHide";
import { useDispatch } from "react-redux";



export default function clientsManagement() {

    const token = jwt.decode(Cookies.get("auth"));


    const [loadingPage, setLoadingPage] = useState(true)
    const [clientsArray, setClientsArray] = useState([])
    const [allClients, setAllClients] = useState([])
    const [section, setSection] = useState('myClients')
    const [searchValue, setSearchValue] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dataFunction(token.company_id)
        navbarHide(dispatch)

    }, [])

    useEffect(() => {
        handleClientsArray(allClients)
    }, [searchValue])

    const dataFunction = async (company_id) => {

        setLoadingPage(true)
        await axios.get(`${baseUrl()}/api/clientsManagement`, {
            params: {
                company_id: company_id
            }
        }).then(res => {
            console.log(res.data)
            setAllClients(res.data)
            setClientsArray(res.data)
            setLoadingPage(false)
        }).catch(e => {
            setLoadingPage(false)
            console.log(e)
        })
    }

    const handleClientsArray = (clients) => {

        if (searchValue === '') {
            setClientsArray(clients)
        } else {
            setClientsArray(clients.filter(elem => elem.clientName.toLowerCase().includes(searchValue.toLowerCase())))
        }



    }







    return (
        <div >
            <Title title={'Gestão de Clientes'} backButton='/' />
            {loadingPage ?
                <SpinnerLG />
                :
                <div className="pagesContent shadow fadeItem" id="pageTop">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end ">

                            <Link href='/addClient'>
                                <button className="btn btn-sm btn-orange">
                                    Adicionar Cliente
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-3 d-flex justify-content-start">

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
                    </div>
                    {/* <hr /> */}

                    <div className="container carousel  " data-bs-touch="false" data-bs-interval='false' id="clientsManagementSection">
                        <ClientsManagementSections section={section} setSection={value => setSection(value)} />

                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12" >
                                        <ClientsPage clients={clientsArray} section='myClients' user_id={token.user_id} />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12" >
                                        <ClientsPage clients={clientsArray} section='allClients' user_id={token.user_id} />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div >




            }
        </div>
    );
}