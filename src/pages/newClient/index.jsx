import { useEffect } from "react";
import { SpinnerLG } from "../../components/loading/Spinners";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from './newClient.module.scss'
import { FixedTopicsBottom } from "../../components/fixedTopics";
import Link from "next/link";
import PropertyTypeCard from "../../addClient/PropertyTypeCard";
import scrollTo from "../../../utils/scrollTo";


export default function NewClient() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryId = urlSearchParams.get("id");
    const queryToken = urlSearchParams.get("token");
    const queryClientId = urlSearchParams.get("clientId");
    const queryUserId = urlSearchParams.get("userId");

    //States
    const [client_id, setClient_id] = useState('')
    const [clientName, setClientName] = useState('')
    const [clientLastName, setClientLastName] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')
    const [style, setStyle] = useState('')
    const [logo, setLogo] = useState('')
    const [backgroundImg, setBackgroundImg] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [user_id, setUser_id] = useState('')
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [profileImageUrl, setProfileImageUrl] = useState('')
    const [propertyType, setPropertyType] = useState('')

    //Loading
    const [loadingPage, setLoadingPage] = useState(true)
    const [showStartBtn, setShowStartBtn] = useState(false)

    useEffect(() => {
        dataFunction(queryUserId, queryClientId)
        setTimeout(() => {
            setShowStartBtn(true)
        }, 11000)
    }, [])

    const dataFunction = async (user_id, client_id) => {

        const data = {
            user_id,
            client_id
        }

        await axios.get(`${baseUrl()}/api/addClient/clientForm`, {
            params: data
        })
            .then(res => {

                setClient_id(res.data.client_id)
                setClientName(res.data.clientName)
                setClientLastName(res.data.clientLastName)
                setEmail(res.data.email)
                setCelular(res.data.celular)
                setStyle(res.data.styles)
                setLogo(res.data.logo)
                setBackgroundImg(res.data.backgroundImg)
                setCompanyName(res.data.companyName)
                setUser_id(res.data.user_id)
                setUserFirstName(res.data.userFirstName)
                setUserLastName(res.data.userLastName)
                setProfileImageUrl(res.data.profileImageUrl)
                setLoadingPage(false)

            }).catch(e => {
                console.log(e)
            })

    }


    return (
        <div>
            {loadingPage ?
                <div className=" d-flex align-items-center" style={{ height: '100vh' }}>
                    <SpinnerLG />
                </div>
                :
                <div style={{ backgroundImage: `linear-gradient(to bottom,#fff0, #fff 80%), ${backgroundImg ? `url(${backgroundImg})` : "#f5874f"}`, backgroundColor: backgroundImg ? '' : "#f5874f", height: '100vh', position: 'fixed', width: '100vw' }}>


                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" style={{ height: '100vh' }}>

                                <div>

                                    <img src={profileImageUrl} alt="logo" id="logoItem" className={`${styles.profileImage} ${styles.profileImagePosition} fadeItem1s `} />
                                    <img src={logo} alt="logo" id="logoItem" className={`${styles.logo} ${styles.logoPosition} fadeItem1s `} />

                                </div>
                                <div className="card m-3 fadeItem1s" style={{ height: "90%" }}>
                                    <div className="card-body">
                                        <div className={`${styles.textPosition} px-1 fadeItem1s`}>


                                            <TypeAnimation
                                                sequence={[
                                                    `Olá ${clientName}, me chamo ${userFirstName}, e irei te ajudar a avaliar o seu imóvel.`,
                                                    100,
                                                    `Olá ${clientName}, me chamo ${userFirstName}, e irei te ajudar a avaliar o seu imóvel.\n
    Preecha o formulário de cadastro para que possamos começar.`,
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                style={{ fontSize: '1.5em', display: 'inline-block' }}
                                            />
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div class="carousel-item" style={{ height: '100vh' }}>
                                <div className="card m-3 fadeItem1s" style={{ height: "90%" }}>
                                    <div className="card-body">

                                        <div className="row fadeItem mt-3">
                                            <label for="telefoneItem" className="form-label fw-bold">Informações do Imóvel</label>
                                            <div className="col-12  my-2">
                                                <label for="clientNameItem" className="form-label ">Tipo do imóvel*</label>

                                                <div className="row">


                                                    <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                                                        <PropertyTypeCard type="Apartamento" setPropertyType={(value) => { setPropertyType(value); scrollTo('propertyInfo') }} propertyType={propertyType} />
                                                    </div>
                                                    <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                                                        <PropertyTypeCard type="Casa" setPropertyType={(value) => { setPropertyType(value); scrollTo('propertyInfo') }} propertyType={propertyType} />
                                                    </div>
                                                    <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                                                        <PropertyTypeCard type="Comercial" setPropertyType={(value) => { setPropertyType(value); scrollTo('propertyInfo') }} propertyType={propertyType} />
                                                    </div>
                                                    <div className="my-2 col-lg-3 col-xxl-2 col-6 d-flex justify-content-center">
                                                        <PropertyTypeCard type="Terreno" setPropertyType={(value) => { setPropertyType(value); scrollTo('propertyInfo') }} propertyType={propertyType} />
                                                    </div>
                                                </div>


                                            </div>
                                        </div>


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

                            <div className="row ps-2 pe-3 fadeItem1s">
                                <button className="ms-2 btn btn-sm btn-orange" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    Começar <FontAwesomeIcon icon={faArrowRight} className="icon ms-1" />
                                </button>

                            </div>
                        </FixedTopicsBottom>
                    )}

                </div>
            }
        </div>
    )
}