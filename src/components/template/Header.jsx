// import styles from './Header.module.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Link from 'next/link'
// import Cookie from 'js-cookie'
// import jwt from 'jsonwebtoken'
// import { useState, useEffect } from 'react'
// import {
//     faBars,
//     faBuilding,
//     faCircleRight,
//     faGear,
//     faKey,
//     faUser
// } from '@fortawesome/free-solid-svg-icons'
// import Router from 'next/router'
// import axios from 'axios'
// import baseUrl from '../../../utils/baseUrl'
// import { editCompanyView } from '../../../utils/permission'
// import { useSelector, useDispatch } from "react-redux";
// import tippy from 'tippy.js'
// import 'tippy.js/dist/tippy.css';
// import { reset } from '../../../store/InventoryList/InventoryList.actions'
// import inventoryCode from '../../../utils/inventoryCode'
// import { akvoToolInitialValues } from '../../../store/AkvoTools/AkvoTools.actions'

// if (typeof window !== "undefined") {
//     const bootstrap = require("bootstrap");
// }

export default function Header() {

    // const dispatch = useDispatch()
    // const list = useSelector(state => state.inventoryList)
    // const token = jwt.decode(Cookie.get('auth'))
    // const inventory = useSelector(state => state.inventoryDB)

    // const [sidebarToggleStatus, setSidebarToggleStatus] = useState(false)
    // const [saveLoading, setSaveLoading] = useState(false)
    // const [DBerror, setDBerror] = useState('')


    // useEffect(() => {

    //     if (list && list.length > 0) {
    //         handleAlertClosingTab()
    //     } else {
    //         window.onbeforeunload = null
    //     }

    // }, [list])


    // useEffect(() => {
    //     if (window.innerWidth < 800) setSidebarToggleStatus(true)
    // }, [])


    // useEffect(() => {
    //     handleSidebarToggle()
    // }, [sidebarToggleStatus])

    // useEffect(() => {
    //     const asideWidth = document.documentElement.style.getPropertyValue('--aside-width')
    //     if (asideWidth) setSidebarToggleStatus(true)
    // }, [document.documentElement.style.getPropertyValue('--aside-width'), !document.documentElement.style.getPropertyValue('--aside-width')])


    // const handleSidebarToggle = () => {
    //     const fixedWidht = document.documentElement.style.getPropertyValue('--aside-fixed-width')
    //     if (!sidebarToggleStatus) document.documentElement.style.setProperty('--aside-width', fixedWidht)
    //     else document.documentElement.style.setProperty('--aside-width', '0px')
    // }


    // const hendleSession = async () => {

    //     if (list.length > 0) {
    //         var myModal = new bootstrap.Modal(document.getElementById('logOutModal'))
    //         myModal.show()
    //         tippy('#listLength', {
    //             content: `${list.length} ${list.length > 1 ? 'dados não salvos' : 'dado não salvo'}`,
    //             placement: 'right',
    //             arrow: true,
    //             showOnCreate: true,
    //         })
    //     } else {
    //         dispatch(akvoToolInitialValues())
    //         Cookie.remove('auth')
    //         localStorage.removeItem('auth')
    //         await Router.replace('/')
    //         Router.reload()
    //     }
    // }

    // const logOutModal = async () => {
    //     dispatch(reset())

    //     setTimeout(async () => {
    //         dispatch(akvoToolInitialValues())
    //         Cookie.remove('auth')
    //         localStorage.removeItem('auth')
    //         await Router.replace('/')
    //         Router.reload()
    //     }, 100)
    // }


    // const handleAlertClosingTab = () => {

    //     window.onbeforeunload = function () {
    //         tippy('#listLength', {
    //             content: `${list.length} ${list.length > 1 ? 'dados não salvos' : 'dado não salvo'}`,
    //             placement: 'right',
    //             arrow: true,
    //             showOnCreate: true,
    //         })
    //         return 'texte tetxtestes';
    //     };
    // }


    // const inventorySave = async () => {

    //     setSaveLoading(true)
    //     setDBerror('')

    //     let newList = []

    //     for (let i = list.length - 1; i >= 0; i--) {

    //         const data = {
    //             ...list[i],
    //             userName: `${token.firstName} ${token.lastName}`,
    //             user_id: token.sub,
    //             dateAdded: new Date(),
    //             dateUpdated: '',
    //             code: inventoryCode(newList, inventory, list[i].fonteEmissao)
    //         }
    //         newList.unshift(data)
    //     }

    //     const dataSave = {
    //         newList,
    //         company_id: token.company_id
    //     }


    //     await axios.patch(`${baseUrl()}/api/inventory`, dataSave)
    //         .then(res => {
    //             dispatch(reset())

    //             setTimeout(async () => {
    //                 Cookie.remove('auth')
    //                 localStorage.removeItem('auth')
    //                 await Router.replace('/')
    //                 Router.reload()
    //             }, 100)
    //         }).catch(e => {
    //             setSaveLoading(false)
    //             setDBerror('houve um erro ao carregar os dados do banco de dados. Tente novamente mais tarde.')
    //             // return false
    //         })

    // }



    return (
        <>
            {/* <nav className={`${styles.headerPosition} text-light navbar shadow-lg d-flex justify-content-between`}>
                <div className="col">
                    <div className="ms-3">
                        <span
                            type="button"
                            className={styles.sidebarToggle}
                            onClick={() => setSidebarToggleStatus(!sidebarToggleStatus)}
                        >
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </span>
                    </div>
                </div>
                {sidebarToggleStatus && (
                    <div className="col d-flex justify-content-center fadeItem1s">
                        <Link href="/">
                            <a >
                                <img src="/logo1.png" alt="logo" className={styles.logo} />
                            </a>
                        </Link>
                    </div>
                )}
                <div className="col d-flex justify-content-end me-4">
                    <div className={`${styles.sidebarToggle} dropdown `}>
                        <span type="button" className="dropdown" data-bs-toggle="dropdown">
                            <FontAwesomeIcon icon={faGear} size="lg" />
                        </span>

                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            <small >
                                <li className='mb-1 '>
                                    <Link href={`/editProfile/${token.sub}`}>
                                        <a className="dropdown-item text-gray-dark" >
                                            <FontAwesomeIcon icon={faUser} className="me-1" /> Editar perfil
                                        </a>
                                    </Link>
                                </li>
                                <li className='my-1'>
                                    <Link href="/passwordChange">
                                        <a className="dropdown-item text-gray-dark" >
                                            <FontAwesomeIcon icon={faKey} className="me-1" /> Alterar senha
                                        </a>
                                    </Link>
                                </li>
                                {editCompanyView(token.userStatus, token.userConfig) && (
                                    <li className='my-1'>
                                        <Link href="/companyEdit">
                                            <a className="dropdown-item text-gray-dark" >
                                                <FontAwesomeIcon icon={faBuilding} className="me-1" /> Editar instituição
                                            </a>
                                        </Link>
                                    </li>
                                )}
                                <li className='my-1'><hr className='dropdown-divider' /></li>
                                <li className='mt-1'>
                                    <a className="dropdown-item text-gray-dark" type='button' onClick={() => hendleSession()}>
                                        <FontAwesomeIcon icon={faCircleRight} className="me-1" /> Sair
                                    </a>
                                </li>
                            </small>
                        </ul>
                    </div>


                </div>




            </nav>
            <div className="modal fade" id="logOutModal" tabIndex="-1" aria-labelledby="logOutModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="h5_modal modal-title" id="exampleModalLabel">Deseja salvar suas alterações?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Você possui {list.length} {list.length > 1 ? 'dados não  salvos no inventário' : 'dado não salvo no inventário'}. Se sair sem salvar, você perderá as alterações.
                            <br />
                            <small className='text-danger'>{DBerror}</small>
                        </div>
                        <div className="modal-footer">
                            {!saveLoading ?
                                <button type="button" className="akvo_btn akvo_btn_primary btn-sm" onClick={() => inventorySave()}>Salvar</button>
                                :
                                <button className="akvo_btn akvo_btn_primary btn-sm font-weight-bold shoppingCart_button" disabled>
                                    <div className="spinner-border spinner-border-sm  me-1 text-light" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </button>
                            }
                            <button type="button" className="akvo_btn akvo_btn_primary btn-sm" onClick={() => logOutModal()}>Não Salvar</button>
                            <button type="button" className="akvo_btn akvo_btn_secondary btn-sm" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )

}