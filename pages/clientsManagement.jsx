import { useEffect, useState } from "react";
import { SpinnerLG } from "../src/components/loading/Spinners";
import Title from "../src/components/title/Title2";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import baseUrl from "../utils/baseUrl";
import ClientCard from "../src/clientsManagement/ClientCard";
import Link from "next/link";



export default function clientsManagement() {

    const token = jwt.decode(Cookies.get("auth"));


    const [loadingPage, setLoadingPage] = useState(true)
    const [clientsArray, setClientsArray] = useState([])
    const [idSelected, setIdSelected] = useState('')

    useEffect(() => {
        dataFunction(token.company_id)
    }, [])

    const dataFunction = async (company_id) => {

        setLoadingPage(true)
        await axios.get(`${baseUrl()}/api/clientsManagement`, {
            params: {
                company_id: company_id
            }
        }).then(res => {
            console.log(res.data)
            setClientsArray(res.data)
            setLoadingPage(false)
        }).catch(e => {
            setLoadingPage(false)
            console.log(e)
        })
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
                    <hr />

                    <div className="row d-flex justify-content-center">
                        <div className="col-12" style={{ overflowY: 'scroll', height: '100%' }}>
                            {clientsArray.map(elem => {


                                return (
                                    <ClientCard
                                        elem={elem}
                                        setIdSelected={value => setIdSelected(value)}
                                        idSelected={idSelected} />
                                )
                            })}


                        </div>

                    </div>

                </div>

            }
        </div>
    );
}