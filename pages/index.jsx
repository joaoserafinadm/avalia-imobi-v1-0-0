// import Head from 'next/head'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import Title from '../src/components/title/Title2'
// import Cookie from 'js-cookie'
// import jwt from 'jsonwebtoken'
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


export default function Home() {

    const token = jwt.decode(Cookie.get('auth'))

    return (

        <div>
            {/* <Title title={`Olá, ${token.firstName}!`} subtitle={'Qual a sua meta de sustentabilidade para hoje?'} />

            <div className='index_bg'></div> */}

            {/* <IndexCards /> */}
            {/* <div className="row">
                <div className="col-12">

                    <h5 className=' ms-2 mt-4'>Qual ferramenta deseja usar?</h5>
                </div>
            </div> */}

            {/* <IndexCardsTools />

            <IndexNotifications /> */}




        </div>
    )
}
