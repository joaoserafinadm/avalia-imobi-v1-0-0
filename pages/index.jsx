// import Head from 'next/head'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'
import Title from '../src/components/title/Title2'
import Cookie from 'js-cookie'
import jwt from 'jsonwebtoken'
import { useEffect } from 'react'
import navbarHide from '../utils/navbarHide.js'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Link from 'next/link.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import isMobile from '../utils/isMobile.js'
import MenuBar from '../src/components/menuBar/index.jsx'
import ClientsCard from '../src/index/ClientsCard.jsx'
import axios from 'axios'
import baseUrl from '../utils/baseUrl.js'
// import Link from 'next/link'
// import $ from 'jquery'
// import axios from 'axios'
// import baseUrl from '../utils/baseUrl'
// import sidebarHide from "../utils/sidebarHide";
// import { useSelector } from 'react-redux'
// import { Accordion } from 'react-bootstrap'
// import { useDispatch } from 'react-redux'
// import { resetStates } from '../store/InventoryManagement/InventoryManagement.actions'
// import IndexNotifications from '../src/components/index/indexNotifications'
// import IndexCards from '../src/components/index/IndexCards_02'
// import IndexCardsTools from '../src/components/index/IndexCardsTools'


// if (typeof window !== "undefined") {
//     const bootstrap = require("bootstrap");
// }


// import { IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
// import {
//     chevronDownCircle,
//     chevronForwardCircle,
//     chevronUpCircle,
//     colorPalette,
//     document,
//     globe,
// } from 'ionicons/icons';


export default function Home() {

    const token = jwt.decode(Cookie.get('auth'))

    const dispatch = useDispatch()

    const [clientsStatus, setClientsStatus] = useState({
        outdated: 0,
        active: 0,
        evaluated: 0,
        answered: 0
    })

    const [clientsArray, setClientsArray] = useState([])

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        navbarHide(dispatch)

        dataFunction(token.company_id)

    }, [])

    const dataFunction = async (company_id) => {

        await axios.get(`${baseUrl()}/api/indexPage`, {
            params: {
                company_id
            }
        }).then((res) => {
            setClientsStatus(res.data.clientsStatus)
            setClientsArray(res.data.clientsArray)
            setLoading(false)
        }).catch((e) => {
            setLoading(false)
            console.log(e)
        })
    }

    return (
        <>

            <div className='fadeItem1s'>
                {/* <Title title={`Olá, ${token.firstName}!`} subtitle={'O que faremos hoje?'} /> */}



                {/*<IndexNotifications /> */}

                <div className="row p-3 mb-5">
                    <div className="col-12 my-2">
                        <ClientsCard clientsStatus={clientsStatus} clientsArray={clientsArray} loading={loading}/>
                    </div>
                    <div className="col-12  my-2">
                    {/* <ClientsCard clientsStatus={clientsStatus} clientsArray={clientsArray} loading={loading}/> */}

                    </div>
                </div>










            </div >
        </>

    )
}
