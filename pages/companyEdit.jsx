import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react"
import baseUrl from '../utils/baseUrl'
import Title from "../src/components/title/Title2";
import window2Mobile from "../utils/window2Mobile";
import VerticalLine from "../utils/VerticalLine";
import Link from "next/link";
import { useDispatch } from "react-redux";
import navbarHide from "../utils/navbarHide";
import { SpinnerLG, SpinnerSM } from "../src/components/loading/Spinners";
import scrollTo from "../utils/scrollTo";
import EstadosList from "../src/components/estadosList";
import { useRouter } from "next/router";
import StyledDropzone from "../src/components/styledDropzone/StyledDropzone";



export default function companyEdit() {

    const token = jwt.decode(Cookies.get("auth"));

    const dispatch = useDispatch()
    const router = useRouter()


    //States
    const [companyName, setCompanyName] = useState('')
    const [companyCreci, setCompanyCreci] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [celular, setCelular] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [headerImg, setHeaderImg] = useState('')
    const [logo, setLogo] = useState('')
    const [logoPreview, setLogoPreview] = useState('')
    const [headerImgPreview, setHeaderImgPreview] = useState('')

    //Loading
    const [loadingPage, setLoadingPage] = useState(true)
    const [loadingSave, setLoadingSave] = useState(false)

    useEffect(() => {

        dataFunction(token.company_id)
        navbarHide(dispatch)

    }, [])

    const dataFunction = async (company_id) => {

        await axios.get(`${baseUrl()}/api/companyEdit`, {
            params: {
                company_id: company_id
            }
        }).then(res => {
            const data = res.data.response
            setCompanyName(data.companyName)
            setCompanyCreci(data.companyCreci)
            setEmail(data.email)
            setTelefone(data.telefone)
            setCelular(data.celular)
            setCep(data.cep)
            setLogradouro(data.logradouro)
            setNumero(data.numero)
            setCidade(data.cidade)
            setEstado(data.estado)
            setHeaderImg(data.headerImg)
            setLogo(data.logo)
            setLoadingPage(false)
        }).catch(e => {
            console.log(e)
        })
    }

    const maskCep = (value) => {
        return setCep(value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1'))
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

    const onBlurCep = (event) => {

        const { value } = event.target

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }

        axios.get(`https://viacep.com.br/ws/${value}/json/`)
            .then(res => {

                const data = res.data

                setLogradouro(data.logradouro)
                setCidade(data.localidade)
                setEstado(data.uf)
            })
    }

    const validate = () => {



        if (!companyName || !telefone || !cidade || !email) {
            if (!companyName) document.getElementById("companyNameItem").classList.add('inputError')
            if (!telefone) document.getElementById("telefoneItem").classList.add('inputError')
            if (!cidade) document.getElementById("cidadeItem").classList.add('inputError')
            if (!email) document.getElementById("emailItem").classList.add('inputError')
            scrollTo('pageTop')
            return false
        }
        else return true

    }

    const handleSave = async (company_id) => {

        setLoadingSave(true)

        const isValid = validate()

        if (isValid) {

            const data = {
                token,
                company_id,
                user_id: token.sub,
                companyName,
                companyCreci,
                telefone,
                celular,
                email,
                cep,
                logradouro,
                numero,
                cidade,
                estado,
                logo,
                headerImg
            }

            await axios.post(`${baseUrl()}/api/companyEdit`, data)
                .then(res => {
                    localStorage.setItem('auth', (Cookies.get('auth')))
                    router.push('/')
                    setLoadingSave(false)

                }).catch(e => {
                    setLoadingSave(false)

                })

        } else {
            setLoadingSave(false)
            return
        }
    }

    const handleUpload = (files) => {
        console.log(files)
    }



    return (
        <div >
            <Title title={'Editar Imobiliária'} backButton='/' />
            {loadingPage ?
                <SpinnerLG />
                :

                <div className="pagesContent shadow fadeItem" id="pageTop">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-sm-5 d-flex">
                            <div className="col-12">
                                <div className="row">

                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="logoItem" className=" fw-bold">Logo</label>
                                        <span className="span" type='button'>Editar</span>
                                    </div>
                                    <div className="row mt-3 ">
                                        <StyledDropzone setFiles={array => { setLogoPreview(array[0]) }} img>
                                            <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                                                {logoPreview ?
                                                    <img className="" src={URL.createObjectURL(logoPreview)} alt="logo" id="logoItem" style={{ maxHeight: "20px", maxWidth: '150px' }} />
                                                    :
                                                    <>
                                                        {logo ?
                                                            <img className="" src={logo} alt="logo" id="logoItem" />
                                                            :
                                                            <img src="https://res.cloudinary.com/dywdcjj76/image/upload/v1695002991/PUBLIC/companyLogoTemplate_xoeyar.png"
                                                                alt="" style={{ height: '150px' }}
                                                                type="button" />
                                                        }
                                                    </>

                                                }


                                            </div>
                                        </StyledDropzone>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">

                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="headerImgItem" className=" fw-bold">Imagem de capa</label>
                                        <span className="span" type='button'>Editar</span>
                                    </div>
                                    <div className="row mt-3 ">
                                        <StyledDropzone setFiles={array => { setHeaderImgPreview(array[0]) }} img>
                                            <div className="col-12 d-flex justify-content-center" style={{ height: '150px' }}>
                                                {headerImgPreview ?
                                                    <img className="" src={URL.createObjectURL(headerImgPreview)} alt="header image" id="headerImgItem" />
                                                    :
                                                    <>
                                                        {headerImg ?
                                                            <img className="" src={headerImg} alt="header image" id="headerImgItem" />
                                                            :
                                                            <img src="https://res.cloudinary.com/dywdcjj76/image/upload/v1695002991/PUBLIC/headerImgTemplate_dndggp.png"
                                                                alt="" style={{ height: '150px' }}
                                                                type="button" />
                                                        }

                                                    </>
                                                }
                                            </div>
                                        </StyledDropzone>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {window2Mobile() && (
                            <VerticalLine />
                        )}
                        <div className="col-12 col-sm-6 d-flex">
                            <div className="col-12">
                                {!window2Mobile() && (<hr />)}
                                <div className="row">
                                    <label for="companyNameItem" class="form-label fw-bold">Imobiliária</label>
                                    <div className="col-12 col-lg-8 my-2">
                                        <input type="text" class="form-control form-control-sm" id="companyNameItem" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Nome da Imobiliária *" />
                                    </div>
                                    <div className="col-12 col-lg-4 my-2">
                                        <input type="text" class="form-control form-control-sm" id="companyCreciItem" value={companyCreci} onChange={e => setCompanyCreci(e.target.value)} placeholder="Creci" />
                                    </div>
                                </div>
                                {!window2Mobile() && (<hr />)}

                                <div className="row mt-3">
                                    <label for="cepItem" class="form-label fw-bold">Endereço</label>
                                    <div className="col-12 col-lg-4 my-2">
                                        <input type="text" class="form-control form-control-sm" id="cepItem" value={cep} onChange={e => maskCep(e.target.value)} onBlur={e => onBlurCep(e)} placeholder="CEP" />
                                    </div>
                                    <div className="col-12 col-lg-8 my-2">
                                        <input type="text" class="form-control form-control-sm" id="logradouroItem" value={logradouro} onChange={e => setLogradouro(e.target.value)} placeholder="Logradouro" />
                                    </div>
                                    <div className="col-12 col-lg-4 my-2">
                                        <input type="text" class="form-control form-control-sm" id="numeroItem" value={numero} onChange={e => setNumero(e.target.value)} placeholder="Número" />
                                    </div>
                                    <div className="col-12 col-lg-6 my-2">
                                        <input type="text" class="form-control form-control-sm" id="cidadeItem" value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Cidade *" />
                                    </div>
                                    <div className="col-12 col-lg-2 my-2">
                                        <select className="form-select form-select-sm" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)}>
                                            <EstadosList />
                                        </select>
                                        {/* <input type="text" class="form-control form-control-sm" id="estadoItem" value={estado} onChange={e => setEstado(e.target.value)} placeholder="Estado *" /> */}
                                    </div>
                                </div>
                                {!window2Mobile() && (<hr />)}

                                <div className="row mt-3">
                                    <label for="telefoneItem" class="form-label fw-bold">Contatos</label>
                                    <div className="col-12 col-lg-6 my-2">
                                        <input type="text" class="form-control form-control-sm" id="telefoneItem" value={telefone} onChange={e => maskTelefone(e.target.value)} placeholder="Telefone *" />
                                    </div>
                                    <div className="col-12 col-lg-6 my-2">
                                        <input type="text" class="form-control form-control-sm" id="celularItem" value={celular} onChange={e => maskCelular(e.target.value)} placeholder="Celular" />
                                    </div>
                                    <div className="col-12 col-lg-12 my-2">
                                        <input type="text" class="form-control form-control-sm" id="emailItem" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail *" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <Link href="/">
                                <button className="btn btn-sm btn-secondary">Cancelar</button>
                            </Link>
                            {loadingSave ?
                                <button className="ms-2 btn btn-sm btn-orange px-4" disabled><SpinnerSM /></button>
                                :
                                <button className="ms-2 btn btn-sm btn-orange" onClick={() => handleSave(token.company_id)}>Salvar</button>
                            }
                        </div>
                    </div>
                </div>
            }

        </div>

    )
}