
import Title from '../src/components/title/Title2'
import Cookie from 'js-cookie'
import jwt from 'jsonwebtoken'
import { useEffect } from 'react'
import navbarHide from '../utils/navbarHide.js'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Link from 'next/link.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faHouseUser, faPlus, faShop, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import isMobile from '../utils/isMobile.js'
import MenuBar from '../src/components/menuBar/index.jsx'
import ClientsCard from '../src/index/ClientsCard.jsx'
import axios from 'axios'
import baseUrl from '../utils/baseUrl.js'
import ClientsCard_02 from '../src/index/ClientsCard_02.jsx'
import UsersCard from '../src/index/UsersCard.jsx'
import LastClientsCard from '../src/index/LastClientsCard.jsx'
import useSWR from 'swr'
import api from "../utils/api";



export default function Home() {



    const token = jwt.decode(Cookie.get('auth'))

    const dispatch = useDispatch()

    const [userResults, setUserResults] = useState({
        clientsLength: 0,
        clientsValuations: 0,
        clientsRating: 0,
        averageTicket: 0
    })

    const [clientsArray, setClientsArray] = useState([])
    const [companyData, setCompanyData] = useState({})


    const [rankedUserResults, setRankedUserResults] = useState({})
    const [rankedUserValuationResults, setRankedUserValuationResults] = useState({})

    const [loading, setLoading] = useState(true)

    const { data, error, isLoading } = useSWR(`/api/indexPage?company_id=${token?.company_id}&user_id=${token?.sub}`, api)


    useEffect(() => {
        if(data) {


        console.log(data)
        setUserResults(data?.data?.userResults)
        setClientsArray(data?.data?.clientsArray)
        setRankedUserResults(data?.data?.rankedUserResults)
        setRankedUserValuationResults(data?.data?.rankedUserValuationResults)
        setCompanyData(data?.data?.companyData)
        setLoading(false)
    }

    }, [data])

    useEffect(() => {
        navbarHide(dispatch)

        dataFunction(token.company_id)

    }, [])

    const dataFunction = async (company_id) => {

        await axios.get(`${baseUrl()}/api/indexPage`, {
            params: {
                company_id,
                user_id: token.sub
            }
        }).then((res) => {
            setUserResults(res.data.userResults)
            setClientsArray(res.data.clientsArray)
            setRankedUserResults(res.data.rankedUserResults)
            setRankedUserValuationResults(res.data.rankedUserValuationResults)
            setCompanyData(res.data.companyData)
            setLoading(false)
        }).catch((e) => {
            setLoading(false)
            console.log(e)
        })
    }

    return (
        <>

            <div className='fadeItem1s mb-5' >
                {/* <Title title={`Olá, ${token.firstName}!`} subtitle={'O que faremos hoje?'} /> */}



                {/*<IndexNotifications /> */}

                <div className="row p-3 ">
                    <div className="col-12 col-md-6 my-2">
                        <ClientsCard_02 userResults={userResults} clientsArray={clientsArray} loading={loading} />

                        <LastClientsCard clientsArray={clientsArray} loading={loading} />
                    </div>
                    <div className="col-12 col-md-6 my-2">
                        <UsersCard userResults={userResults}
                            clientsArray={clientsArray}
                            loading={loading}
                            rankedUserResults={rankedUserResults}
                            rankedUserValuationResults={rankedUserValuationResults}
                            companyData={companyData} />


                    </div>
                </div>
                <div className="row px-3 pb-5">
                    <div className="col-12 col-md-4 my-2">
                        <Link href="/editProfile">
                            <div className="card shadow cardAnimation" type="button">
                                <div className="card-body text-center ">
                                    <span className='fs-4 bold text-secondary'>
                                        <FontAwesomeIcon icon={faUser} className='me-2 small' /> Meu Perfil
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 my-2">
                        <Link href="/companyEdit">

                            <div className="card shadow cardAnimation" type="button">
                                <div className="card-body text-center">
                                    <span className='fs-4 bold text-secondary'>
                                        <FontAwesomeIcon icon={faShop} className='me-2 small' /> Imobiliária
                                    </span>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="col-12 col-md-4 my-2">
                        <Link href="/accountSetup">

                            <div className="card shadow cardAnimation" type="button">
                                <div className="card-body text-center">
                                    <span className='fs-4 bold text-secondary'>
                                        <FontAwesomeIcon icon={faGear} className='me-2 small' />Configurações
                                    </span>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>










            </div >
        </>

    )
}
