import Link from "next/link";
import Title from "../src/components/title/Title2";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SpinnerLG } from "../src/components/loading/Spinners";
import navbarHide from "../utils/navbarHide";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import UsersCard from "../src/usersManagement/UserCard";



export default function UsersManagement() {

    const token = jwt.decode(Cookies.get("auth"));
    const dispatch = useDispatch()


    const [searchValue, setSearchValue] = useState('')
    const [loadingPage, setLoadingPage] = useState(true)
    const [usersArray, setUsersArray] = useState([])
    const [idSelected, setIdSelected] = useState('')

    useEffect(() => {
        dataFunction(token.company_id)
        navbarHide(dispatch)

    }, [])

    const dataFunction = async (company_id) => {

        setLoadingPage(true)

        await axios.get(`${baseUrl()}/api/usersManagement`, {
            params: {
                company_id: company_id
            }
        }).then(res => {
            console.log(res.data)
            setUsersArray(res.data)
            setLoadingPage(false)
        }).catch(e => {
            setLoadingPage(false)
            console.log(e)
        })
    }

    return (
        <div >
            <Title title={'Gestão de usuários'} backButton='/' />
            {loadingPage ?
                <SpinnerLG />
                :

                <div className="pagesContent shadow fadeItem" id="pageTop">
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-end ">

                            <Link href='/userAdd'>
                                <button className="btn btn-sm btn-orange">
                                    Adicionar usuário
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-3 d-flex justify-content-start">

                            <div class="input-group mb-3">
                                <input type="text"
                                    class="form-control"
                                    placeholder="Pesquisar"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={searchValue}
                                    onChange={e => setSearchValue(e.target.value)}
                                />
                                <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} className="icon" /></span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-3">

                            {usersArray.map(elem => {
                                return (
                                    <div className="col-12 col-md-6 d-flex justify-content-center">


                                        <UsersCard setIdSelected={value => setIdSelected(value)} idSelected={idSelected} elem={elem} />
                                    </div>

                                )

                            })}
                    </div>
                </div>
            }
        </div>

    )
}