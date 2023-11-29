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
import { initialValues, setBackgroundImg, setCelular, setClientLastName, setClientName, setClient_id, setCompanyName, setEmail, setLogo, setProfileImageUrl, setStyle, setUserFirstName, setUserLastName, setUser_id } from "../../../store/NewClientForm/NewClientForm.actions";
import Slide01 from "./Slide01";
import Slide02 from "./Slide02";
import Slide03 from "./Slide03";


export default function NewClient() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryId = urlSearchParams.get("id");
    const queryToken = urlSearchParams.get("token");
    const queryClientId = urlSearchParams.get("clientId");
    const queryUserId = urlSearchParams.get("userId");

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    const initialSlide = newClientForm.slide

    //Loading
    const [loadingPage, setLoadingPage] = useState(true)
    const [showStartBtn, setShowStartBtn] = useState(false)
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        dataFunction(queryUserId, queryClientId)
        if (initialSlide === 0) {
            setTimeout(() => {
                setShowStartBtn(true)
            }, 8000)
        } else {
            setShowStartBtn(true)
        }

    }, [])

    const dataFunction = async (user_id, client_id) => {

        if (newClientForm.client_id !== client_id) {

            const data = {
                user_id,
                client_id
            }

            await axios.get(`${baseUrl()}/api/addClient/clientForm`, {
                params: data
            })
                .then(res => {

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
                    console.log(e)
                })
        } else {
            setLoadingPage(false)
        }


    }


    return (
        <div>
            {loadingPage ?
                <div className=" d-flex align-items-center" style={{ height: '100vh' }}>
                    <SpinnerLG />
                </div>
                :
                <div className="fadeItem" style={{ backgroundImage: `linear-gradient(to bottom,#fff0, #fff 80%), ${newClientForm.backgroundImg ? `url(${newClientForm.backgroundImg})` : "#f5874f"}`, backgroundColor: newClientForm.backgroundImg ? '' : "#f5874f", height: '100vh', position: 'fixed', width: '100vw' }}>


                    <div
                        id="carouselExampleControls"
                        class="carousel slide"
                        data-bs-touch="false"
                        data-bs-interval="false">
                        <div class="carousel-inner">


                            <div class={`carousel-item  ${initialSlide === 0 && 'active'}`} style={{ height: '100vh' }} >

                                <ApresentationMobile />



                            </div>
                            <div class={`carousel-item  ${initialSlide === 1 && 'active'}`} style={{ height: '100vh' }} >
                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                    <div className="card-body">

                                        <Slide01 />

                                    </div>
                                </div>
                            </div>
                            <div class={`carousel-item  ${initialSlide === 2 && 'active'}`} style={{ height: '100vh' }} >
                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                    <div className="card-body">

                                        <Slide02 />

                                    </div>
                                </div>
                            </div>
                            <div class={`carousel-item  ${initialSlide === 3 && 'active'}`} style={{ height: '100vh' }} >
                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                    <div className="card-body">

                                        <Slide03 />

                                    </div>
                                </div>
                            </div>
                            <div class={`carousel-item  ${initialSlide === 4 && 'active'}`} style={{ height: '100vh' }} >
                                <div className="card m-3 fadeItem1s" style={{ height: "90%", overflowY: 'scroll' }}>
                                    <div className="card-body">
                                        <img src="/JU.jpeg" alt="" height={500}/>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>








                    {showStartBtn && (
                        // <div className="fadeItem1s2s">
                        //     <button className="btn btn-primary">Começar <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" /></button>
                        // </div>
                        <FixedTopicsBottom >

                            <FixedButtons setSlide={(value => setSlide(value))} slide={slide} />
                        </FixedTopicsBottom>
                    )}

                </div>
            }
        </div>
    )
}