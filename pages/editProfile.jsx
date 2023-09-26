import { useEffect } from "react";
import Title from "../src/components/title/Title2";
import navbarHide from "../utils/navbarHide.js";
import { useDispatch } from "react-redux";
import PortraitCard from "../src/components/userCard/PortraitCard";
import Link from "next/link";
import window2Mobile from "../utils/window2Mobile";
import { useState } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { SpinnerLG } from "../src/components/loading/Spinners";
import StyledDropzone from "../src/components/styledDropzone/StyledDropzone";
import VerticalLine from "../utils/VerticalLine";



export default function EditProfile() {

    const token = jwt.decode(Cookies.get('auth'))
    const dispatch = useDispatch()

    //States
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mainEmail, setMainEmail] = useState('')
    const [secondEmail, setSecondEmail] = useState('')
    const [celular, setCelular] = useState('')
    const [telefone, setTelefone] = useState('')
    const [creci, setCreci] = useState('')
    const [profileImageUrl, setProfileImageUrl] = useState('')
    const [profileImageUrlReview, setProfileImageUrlReview] = useState('')
    const [headerImg, setHeaderImg] = useState('')
    const [logo, setLogo] = useState('')

    //Loading 
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        navbarHide(dispatch)
        dataFunction(token.company_id, token.sub)

    }, [])

    const dataFunction = async (company_id, user_id) => {

        await axios.get(`${baseUrl()}/api/editProfile`, {
            params: {
                company_id: company_id,
                user_id: user_id
            }
        }).then(res => {
            setLoadingPage(false)
            console.log(res)

            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setMainEmail(res.data.email)
            setCreci(res.data.creci)
            setProfileImageUrl(res.data.profileImageUrl)
            setHeaderImg(res.data.headerImg)
            setLogo(res.data.logo)

        })
    }


    const maskTelefone = (value) => {
        return setTelefone(value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1'))
    }

    const maskCelular = (value) => {
        return setCelular(value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1'))
    }


    return (
        <div >
            <Title title={'Editar Cartão'} backButton='/' />
            {loadingPage ?
                <SpinnerLG />
                :
                <div className="pagesContent shadow fadeItem">
                    <div className="row d-flex justify-content-center">
                        <div className="col-5 d-flex justify-content-center">
                            <div className="my-5">

                                <PortraitCard
                                    firstName={firstName}
                                    lastName={lastName}
                                    creci={creci}
                                    mainEmail={mainEmail}
                                    secondEmail={secondEmail}
                                    celular={celular}
                                    telefone={telefone}
                                    profileImageUrl={profileImageUrl}
                                    headerImg={headerImg}
                                    logo={logo}
                                />
                            </div>
                        </div>

                        {window2Mobile() && (
                            <>
                                {window2Mobile() && (
                                    <VerticalLine />
                                )}
                                <div className="col-6 d-flex">
                                    <div className="row">
                                        <div className="col-12">


                                            <div className="row">

                                                <div className="d-flex justify-content-between">
                                                    <input type="file" name="image/*" id="logoItem" accept="image/*" onChange={e => setLogoPreview(e.target.files[0])}
                                                        className="form-input" hidden />
                                                    <label className=" fw-bold">Imagem de perfil</label>
                                                    <label htmlFor="logoItem" className="span" type='button'>Editar</label>
                                                </div>
                                                <StyledDropzone setFiles={array => { setProfileImageUrlReview(array[0]) }} img>
                                                    <div className="row mt-3 d-flex justify-content-center align-items-center" style={{ height: '150px' }}>

                                                        <div className="col-12 d-flex justify-content-center align-items-center" >
                                                            {profileImageUrlReview ?
                                                                <img src={URL.createObjectURL(profileImageUrlReview)} alt="logo" id="logoItem" className="logoEdit fadeItem" />
                                                                :
                                                                <>
                                                                    {profileImageUrl ?
                                                                        <img src={profileImageUrl} alt="logo" id="logoItem" className="logoEdit fadeItem" />
                                                                        :
                                                                        <img src="https://res.cloudinary.com/dywdcjj76/image/upload/v1695257785/PUBLIC/companyLogoTemplate_xoeyar.png"
                                                                            alt="" className="logoEdit"
                                                                            type="button" />
                                                                    }
                                                                </>

                                                            }


                                                        </div>
                                                    </div>
                                                </StyledDropzone>
                                            </div>

                                        </div>
                                        <div className="row mt-3">
                                            <label for="firstNameItem" className="form-label fw-bold">Identificação</label>
                                            <div className="col-12 col-lg-4 my-2">
                                                <label for="firstNameItem" className="form-label ">Nome</label>
                                                <input type="text" className="form-control form-control-sm" id="firstNameItem" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="" />
                                            </div>
                                            <div className="col-12 col-lg-4 my-2">
                                                <label for="LastNameItem" className="form-label ">Sobrenome</label>
                                                <input type="text" className="form-control form-control-sm" id="lastNameItem" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="" />
                                            </div>
                                            <div className="col-12 col-lg-4 my-2">
                                                <label for="creciItem" className="form-label ">Creci</label>
                                                <input type="text" className="form-control form-control-sm" id="creciItem" value={creci} onChange={e => setCreci(e.target.value)} placeholder="" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <label for="mainEmailItem" className="form-label fw-bold">Contato</label>
                                            <div className="col-12 col-lg-6 my-2">
                                                <label for="mainEmailItem" className="form-label ">E-mail principal</label>
                                                <input type="text" className="form-control form-control-sm" disabled id="mainEmailItem" value={mainEmail} onChange={e => setMainEmail(e.target.value)} placeholder="" />
                                            </div>
                                            <div className="col-12 col-lg-6 my-2">
                                                <label for="secondaEmailItem" className="form-label ">E-mail secundário</label>
                                                <input type="text" className="form-control form-control-sm" id="secondaEmailItem" value={secondEmail} onChange={e => setSecondEmail(e.target.value)} placeholder="" />
                                            </div>
                                            <div className="col-12 col-lg-6 my-2">
                                                <label for="telefoneItem" className="form-label ">Telefone</label>
                                                <input type="text" className="form-control form-control-sm" id="telefoneItem" value={telefone} onChange={e => maskTelefone(e.target.value)} placeholder="" />
                                            </div>
                                            <div className="col-12 col-lg-6 my-2">
                                                <label for="telefoneItem" className="form-label ">Celular</label>
                                                <input type="text" className="form-control form-control-sm" id="telefoneItem" value={celular} onChange={e => maskCelular(e.target.value)} placeholder="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )}



                        <hr />
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <Link href="/">

                                    <button className="btn btn-sm btn-secondary">Cancelar</button>
                                </Link>
                                <button className="ms-2 btn btn-sm btn-orange text-light">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}