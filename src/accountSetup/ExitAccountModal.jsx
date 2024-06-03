
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useState } from "react"
import { SpinnerSM } from "../components/loading/Spinners"



export default function ExitAccountModal(props) {

    const router = useRouter()

    const [loadingExit, setLoadingExit] = useState(false)


    const hendleSession = async () => {

        setLoadingExit(true)

        Cookies.remove('auth')
        localStorage.removeItem('auth')
        await router.replace('/')
        router.reload()
    }


    return (
        <div className="modal fade" id="exitAccountModal" tabIndex="-1" aria-labelledby="exitAccountModalLabel" aria-hidden="true">
            <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable `}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title title-dark" id="exitAccountModalLabel"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Tem certeza que deseja sair da conta?
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Fechar</button>
                        {loadingExit ?
                            <button className="btn btn-danger btn-sm" disabled><SpinnerSM /></button>
                            :
                            <button className="btn btn-danger btn-sm" data-bs-dismiss="modal" onClick={hendleSession}>Sair</button>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
