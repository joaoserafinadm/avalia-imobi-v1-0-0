import { useEffect } from "react";
import { SpinnerLG } from "../../components/loading/Spinners";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from './newClient.module.scss'
import { FixedTopicsBottom } from "../../components/fixedTopics";
import Link from "next/link";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import scrollTo from "../../../utils/scrollTo";
import Page1 from "./Page1";
import FixedButtons from "./FixedButtons";
import ApresentationMobile from "./ApresentationMobile";
import { useDispatch, useSelector } from "react-redux";
import { initialValues, setBackgroundImg, setCelular, setClientLastName, setClientName, setClient_id, setCompanyName, setEmail, setLogo, setProfileImageUrl, setSlide, setStyle, setUserFirstName, setUserLastName, setUser_id } from "../../../store/NewClientForm/NewClientForm.actions";
import Slide01 from "./Slide01";
import Slide02 from "./Slide02";
import Slide03 from "./Slide03";
import Slide04 from "./Slide04";
import Slide05 from "./Slide05";
import Slide06 from "./Slide06";
import Slide07 from "./Slide07";
import { createImageUrl } from "../../../utils/createImageUrl";
import slideNumber from "../../../utils/slideNumber";
import isMobile from "../../../utils/isMobile";
import DesktopForm from "./DesktopForm";
import ApresentationDesktop from "./ApresentationDesktop";
import FinalSlideDesktop from "./FinalSlideDesktop";
import GeralFeatures from "./GeralFeatures";
import ActiveClientPage from "./ActiveClientPage";
import ErrorPage from "./ErrorPage";


export default function NewClient() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryId = urlSearchParams.get("id");
    const queryToken = urlSearchParams.get("token");
    const queryClientId = urlSearchParams.get("clientId");
    const queryUserId = urlSearchParams.get("userId");


    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    // const initialSlide = newClientForm.slide === -1 ? 0 : newClientForm.slide
    const initialSlide = 0

    //Loading
    const [loadingPage, setLoadingPage] = useState(true)
    const [showStartBtn, setShowStartBtn] = useState(false)
    const [files, setFiles] = useState([])
    const [loadingSave, setLoadingSave] = useState(false)
    const [mobile, setMobile] = useState(false)

    const [errorSection, setErrorSection] = useState('')
    const [errorData, setErrorData] = useState('')

    useEffect(() => {
        dataFunction(queryUserId, queryClientId)
        setMobile(isMobile())
        dispatch(setSlide(initialSlide))
    }, [])

    const dataFunction = async (user_id, client_id) => {

        if (newClientForm.client_id !== client_id) {

            dispatch(initialValues())

            const data = {
                user_id,
                client_id
            }

            await axios.get(`${baseUrl()}/api/addClient/clientForm`, {
                params: data
            })
                .then(res => {

                    console.log("res.data", res.data)

                    setTimeout(() => {
                        setShowStartBtn(true)
                    }, 8000)


                    dispatch(initialValues())
                    dispatch(setClient_id(res.data.client_id))
                    dispatch(setClientName(res.data.clientName))
                    dispatch(setClientLastName(res.data.clientLastName))
                    dispatch(setEmail(res.data.email))
                    dispatch(setCelular(res.data.celular))
                    dispatch(setStyle(res.data.styles))
                    dispatch(setLogo(res.data.logo))
                    dispatch(setBackgroundImg(res.data.backgroundImg))
                    dispatch(setCompanyName(res.data.companyName))
                    dispatch(setUser_id(res.data.user_id))
                    dispatch(setUserFirstName(res.data.userFirstName))
                    dispatch(setUserLastName(res.data.userLastName))
                    dispatch(setProfileImageUrl(res.data.profileImageUrl))
                    setLoadingPage(false)

                }).catch(e => {
                    setLoadingPage(false)

                    if (e.response.data.error === "Client active") {
                        setErrorSection('activeClient')
                        setErrorData(e.response.data.data)
                    } else {
                        setErrorSection('error')
                    }
                })
        } else {
            setLoadingPage(false)
            setShowStartBtn(true)

        }


    }

    const handleSlide = (id) => {
        setTimeout(() => {

            dispatch(setSlide(slideNumber(id)))
        }, 700)
    }



    const handleSave = async (form) => {

        setLoadingSave(true)

        // const filesUrl = []
        const filesUrl = files.length > 0 ? await createImageUrl(files, 'CLIENT_FILES') : []

        const data = {
            ...form,
            files: filesUrl
        }



        if (!mobile) {

            var myCarousel = document.getElementById('clientFormCarouselDesktop');
            var carousel = new bootstrap.Carousel(myCarousel);
        } else {
            var myCarousel = document.querySelector('#clientFormCarousel')
            var carousel = new bootstrap.Carousel(myCarousel)
        }


        await axios.post(`${baseUrl()}/api/addClient/clientForm`, data)
            .then(res => {
                setLoadingSave(false)
                carousel?.next()
                handleSlide('clientFormCarousel')
            }).catch(e => {
                setLoadingSave(false)
            })





    }


    return (
        <div>
            {loadingPage ?
                <div className=" d-flex align-items-center" style={{ height: '100vh' }}>
                    <SpinnerLG />
                </div>
                :
                <>
                    {errorSection === 'activeClient' && (
                        <ActiveClientPage errorData={errorData} />
                    )}

                    {errorSection === 'error' && (
                        <ErrorPage />
                    )}

                    {!errorSection && (
                        <>
                            {mobile ?


                                <div className="fadeItem" style={{ backgroundImage: `linear-gradient(to bottom,#fff0, #fff 80%), ${newClientForm.backgroundImg ? `url(${newClientForm.backgroundImg})` : "#f5874f"}`, backgroundColor: newClientForm.backgroundImg ? '' : "#f5874f", height: '100vh', position: 'fixed', width: '100vw' }}>


                                    <div
                                        id="clientFormCarousel"
                                        class="carousel slide"
                                        data-bs-touch="false"
                                        data-bs-interval="false">
                                        <div class="carousel-inner">


                                            <div class={`carousel-item  ${initialSlide === 0 && 'active'}`} style={{ height: '100vh' }} >

                                                <ApresentationMobile />



                                            </div>
                                            <div class={`carousel-item  ${initialSlide === 1 && 'active'}`} style={{ height: '100vh' }} >
                                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                                    <div className="card-body pb-5">

                                                        <Slide01 />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class={`carousel-item  ${initialSlide === 2 && 'active'}`} style={{ height: '100vh' }} >
                                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                                    <div className="card-body pb-5">

                                                        <Slide02 />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class={`carousel-item  ${initialSlide === 3 && 'active'}`} style={{ height: '100vh' }} >
                                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                                    <div className="card-body pb-5">

                                                        <GeralFeatures type={newClientForm.propertyType} />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class={`carousel-item  ${initialSlide === 4 && 'active'}`} style={{ height: '100vh' }} >
                                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                                    <div className="card-body pb-5">

                                                        <Slide04 />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class={`carousel-item  ${initialSlide === 5 && 'active'}`} style={{ height: '100vh' }} >
                                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                                    <div className="card-body pb-5">

                                                        <Slide05 setFiles={array => setFiles(array)} files={files} />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class={`carousel-item  ${initialSlide === 6 && 'active'}`} style={{ height: '100vh' }} >
                                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                                    <div className="card-body pb-5">

                                                        <Slide06 files={files} />

                                                    </div>
                                                </div>
                                            </div>
                                            <div class={`carousel-item  ${initialSlide === 7 && 'active'}`} style={{ height: '100vh' }} >


                                                <Slide07 />


                                            </div>
                                            {/* <div class={`carousel-item  ${initialSlide === 6 && 'active'}`} style={{ height: '100vh' }} >
        <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
            <div className="card-body">
                <img src="/JU.jpeg" alt="" height={500}/>

            </div>
        </div>
    </div> */}

                                        </div>
                                    </div>








                                    {showStartBtn && (
                                        // <div className="fadeItem1s2s">
                                        //     <button className="btn btn-primary">Começar <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" /></button>
                                        // </div>
                                        <>
                                            {initialSlide !== 7 && (

                                                <FixedTopicsBottom >

                                                    <FixedButtons
                                                        handleSave={() => handleSave(newClientForm)}
                                                        loadingSave={loadingSave} />
                                                </FixedTopicsBottom>
                                            )}
                                        </>
                                    )}

                                </div>
                                :
                                <div className="fadeItem" style={{ backgroundImage: `linear-gradient(to bottom,#fff0, #fff 80%), ${newClientForm.backgroundImg ? `url(${newClientForm.backgroundImg})` : "#f5874f"}`, backgroundColor: newClientForm.backgroundImg ? '' : "#f5874f", height: '100vh', position: 'fixed', width: '100vw' }}>

                                    <div
                                        id="clientFormCarouselDesktop"
                                        class="carousel slide"
                                        data-bs-touch="false"
                                        data-bs-interval="false">

                                        <div class="carousel-inner">


                                            <div class={`carousel-item  active`} style={{ height: '100vh' }} >

                                                <ApresentationDesktop />
                                            </div>
                                            <div class={`carousel-item `} style={{ height: '100vh' }} >

                                                <DesktopForm files={files}
                                                    setFiles={array => setFiles(array)}
                                                    handleSave={() => handleSave(newClientForm)}
                                                    loadingSave={loadingSave} />
                                            </div>
                                            <div class={`carousel-item `} style={{ height: '100vh' }} >

                                                <FinalSlideDesktop />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }
                        </>
                    )}



                </>

            }
        </div>
    )
}