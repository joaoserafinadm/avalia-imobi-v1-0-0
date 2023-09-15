import { useEffect } from "react";
import Title from "../src/components/title/Title2";
import navbarHide from "../utils/navbarHide.js";
import { useDispatch } from "react-redux";
import PortraitCard from "../src/components/userCard/PortraitCard";
import Link from "next/link";



export default function EditProfile() {

    const dispatch = useDispatch()

    useEffect(() => {
        navbarHide(dispatch)

    }, [])


    return (
        <div >
            <Title title={'Editar Cartão'} backButton='/' />
            <div className="pagesContent shadow fadeItem">
                <div className="row d-flex justify-content-center">
                    <div className="col-5 d-flex justify-content-center">
                        <div className="my-5">

                            <PortraitCard />
                        </div>
                    </div>

                    {/* <div className="col-1 border-start">

                    </div>
                    <div className="col-6 d-flex">

fdsfdsfvai vai
                    </div> */}


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