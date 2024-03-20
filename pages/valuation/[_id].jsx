import { useRouter } from "next/router";
import Title from "../../src/components/title/Title2";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import navbarHide from "../../utils/navbarHide";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import baseUrl from "../../utils/baseUrl";
import { SpinnerLG } from "../../src/components/loading/Spinners";
import ClientInfo from "../../src/clientsManagement/ClientInfo";
import Sections from "../../src/components/Sections";
import ValuationConfig from "../../src/valuation/ValuationConfig";



export default function ValuationPage(props) {

    const token = jwt.decode(Cookies.get("auth"));


    const router = useRouter();
    const dispatch = useDispatch()

    const [client, setClient] = useState()

    const [loadingPage, setLoadingPage] = useState(true)
    const [section, setSection] = useState('Informações do imóvel')


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


    return (
        <div >
            <Title title={client && client?.clientName + " " + client?.clientLastName} subtitle="Avaliação do imóvel" backButton='/' />

            {loadingPage ?
                <SpinnerLG />
                :
                <div className="pagesContent-lg shadow fadeItem" id="pageTop">
                    <div className="container carousel  " data-bs-touch="false" data-bs-interval='false' id="clientManage">

                        <Sections section={section} idTarget="clientManage"
                            setSection={value => setSection(value)}
                            sections={["Informações do imóvel", "Configurar avaliação"]} />


                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <ClientInfo client={client} />
                            </div>
                        </div>
                        <div className="carousel-inner ">
                            <div className="carousel-item ">
                                <ValuationConfig client={client} />
                            </div>
                        </div>
                    </div>
                </div>


            }
        </div>
    )



}