import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react"
import baseUrl from '../utils/baseUrl'
import Title from "../src/components/title/Title2";
import window2Mobile from "../utils/window2Mobile";
import VerticalLine from "../utils/VerticalLine";
import Link from "next/link";




export default function companyEdit() {

    const token = jwt.decode(Cookies.get("auth"));

    //States
    const [companyName, setCompanyName] = useState('')
    const [companyCreci, setCompanyCreci] = useState('')
    const [telefone, setTelefone] = useState('')
    const [celular, setCelular] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [headerImg, setHeaderImg] = useState('')
    const [logo, setLogo] = useState('')

    //Loading
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {

        dataFunction(token.company_id)

    }, [])

    const dataFunction = async (company_id) => {

        // await axios.get(`${baseUrl()}/api/companyEdit`, {
        //     params: {
        //         company_id: company_id
        //     }
        // }).then(res => {
        //     setCompanyName(res.data.companyName)
        //     setCompanyCreci(res.data.companyCreci)
        //     setTelefone(res.data.telefone)

        //     setCep(res.data.cep)
        //     setLogradouro(res.data.logradouro)
        //     setNumero(res.data.numero)
        //     setCidade(res.data.cidade)
        //     setEstado(res.data.estado)
        //     setHeaderImg(res.data.headerImg)
        //     setLogo(res.data.logo)
        //     setLoadingPage(false)
        // }).catch(e => {
        //     console.log(e)
        // })
    }

    const maskCep = (value) => {
        return setCep(value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1'))
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



    return (
        <div >
            <Title title={'Editar Imobiliária'} backButton='/' />
            <div className="pagesContent shadow fadeItem">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-sm-5 d-flex">
                        <div className="col-12">
                            <div className="row">

                                <div className="d-flex justify-content-between">
                                    <label htmlFor="logoItem" className=" fw-bold">Logo</label>
                                    <span className="span" type='button'>Editar</span>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-12 d-flex justify-content-center">
                                        {logo ?
                                            <img className="" src={logo} alt="logo" />
                                            :
                                            <img src="https://res.cloudinary.com/dywdcjj76/image/upload/v1695002991/PUBLIC/companyLogoTemplate_xoeyar.png"
                                                alt="" style={{ height: '150px' }}
                                                type="button" />
                                        }
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">

                                <div className="d-flex justify-content-between">
                                    <label htmlFor="logoItem" className=" fw-bold">Imagem de capa</label>
                                    <span className="span" type='button'>Editar</span>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-12 d-flex justify-content-center">
                                        {logo ?
                                            <img className="" src={headerImg} alt="logo" />
                                            :
                                            <img src="https://res.cloudinary.com/dywdcjj76/image/upload/v1695002991/PUBLIC/headerImgTemplate_dndggp.png"
                                                alt="" style={{ height: '150px' }}
                                                type="button" />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {window2Mobile() && (
                        <VerticalLine />
                    )}
                    <div className="col-12 col-sm-6 d-flex">
                        <div className="col-12">
                            {!window2Mobile() && (<hr/>)}
                            <div className="row">
                                <label for="exampleInputPassword1" class="form-label fw-bold">Imobiliária</label>
                                <div className="col-12 col-lg-8 my-2">
                                    <input type="text" class="form-control form-control-sm" id="cepItem" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Nome da Imobiliária" />
                                </div>
                                <div className="col-12 col-lg-4 my-2">
                                    <input type="text" class="form-control form-control-sm" id="cepItem" value={companyCreci} onChange={e => setCompanyCreci(e.target.value)} placeholder="Creci" />
                                </div>
                            </div>
                            {!window2Mobile() && (<hr/>)}

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
                                <div className="col-12 col-lg-4 my-2">
                                    <input type="text" class="form-control form-control-sm" id="cidadeItem" value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Cidade" />
                                </div>
                                <div className="col-12 col-lg-4 my-2">
                                    <input type="text" class="form-control form-control-sm" id="estadoItem" value={estado} onChange={e => setEstado(e.target.value)} placeholder="Estado" />
                                </div>
                            </div>
                            {!window2Mobile() && (<hr/>)}

                            <div className="row mt-3">
                                <label for="cepItem" class="form-label fw-bold">Contatos</label>
                                <div className="col-12 col-lg-6 my-2">
                                    <input type="text" class="form-control form-control-sm" id="telefoneItem" value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Telefone" />
                                </div>
                                <div className="col-12 col-lg-6 my-2">
                                    <input type="text" class="form-control form-control-sm" id="celularItem" value={celular} onChange={e => setCelular(e.target.value)} placeholder="Celular" />
                                </div>
                                <div className="col-12 col-lg-12 my-2">
                                    <input type="text" class="form-control form-control-sm" id="celularItem" value={celular} onChange={e => setCelular(e.target.value)} placeholder="E-mail" />
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
                        <button className="ms-2 btn btn-sm btn-orange text-white">Salvar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}