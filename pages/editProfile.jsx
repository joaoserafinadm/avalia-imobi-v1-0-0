import { useEffect } from "react";
import Title from "../src/components/title/Title2";
import navbarHide from "../utils/navbarHide.js";
import { useDispatch } from "react-redux";




export default function EditProfile() {

    const dispatch = useDispatch()

    useEffect(() => {
        navbarHide(dispatch)        

    }, [])


    return (
        <div>
            <Title title={'Editar Perfil'} backButton='/' />
            <div className="pagesContent shadow">
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
                dsads <br />
            </div>
        </div>
    )
}