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



export default function EditProfile() {

    const token = jwt.decode(Cookies.get('auth'))
    const dispatch = useDispatch()

    //States
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [creci, setCreci] = useState('')

    //Loading 
    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        navbarHide(dispatch)
        dataFunction(token.sub)

    }, [])

    const dataFunction = async(user_id) => {

        await axios.get(`${baseUrl()}/api/editProfile`, {
            params: {
                user_id: user_id
            }
        }).then(res => {

        })
    }


    return (
        <div >
            <Title title={'Editar Cartão'} backButton='/' />
            <div className="pagesContent shadow fadeItem">
                <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center">
                        <div className="my-5">

                            <PortraitCard firstName={firstName} />
                        </div>
                    </div>

                    {window2Mobile() && (
                        <>
                            <div className="col-1 border-start">

                            </div>
                            <div className="col-6 d-flex">

                                <div className="row">
                                    <div className="col-12 d-flex">
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Nome</label>
                                            <input type="text" class="form-control" id="exampleInputPassword1" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Sobrenome</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" />
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
        </div>
    )
}