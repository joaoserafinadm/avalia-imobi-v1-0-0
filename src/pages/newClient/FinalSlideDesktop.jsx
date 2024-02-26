import { useSelector } from "react-redux"
import styles from './newClient.module.scss'
import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"



export default function FinalSlideDesktop(props) {

    const newClientForm = useSelector(state => state.newClientForm)

    const [showLogo, setShowLogo] = useState(false)
    const [showStartButton, setShowStartButton] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setShowLogo(true)
        }, 9000)

    }, [])





    return (
        <div className="card m-3 fadeItem1s" style={{ height: "95%", overflowY: 'scroll', overflowX: 'hidden' }}>


            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">

                    <img src={newClientForm.profileImageUrl} alt="logo" id="logoItem" className={`${styles.profileImage}  fadeItem1s `} />
                </div>

            </div>

            <div className="row d-flex justify-content-center mt-5">
                <div className="col-12 col-md-6 ">
                    <div className={`px-1 fadeItem1s`}>
                        <TypeAnimation
                            sequence={[
                                200,
                                `Pronto!`,
                                500,
                                `Pronto!\nVocê finalizou o formulário com sucesso.`,
                                500,
                                `Pronto!\nVocê finalizou o formulário com sucesso.\nEm breve retornaremos com a avaliação do seu imóvel.`,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.5em', display: 'inline-block', whiteSpace: 'pre-line' }}
                        />
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center">

                    {showLogo && (

                        <img src={newClientForm.logo} alt="logo" id="logoItem" className={`${styles.logo}  fadeItem1s `} />
                    )}


                </div>
            </div>
            <div className="row my-5">
                <div className="col-12 d-flex justify-content-center">

                    {showStartButton && (

                        <span
                            type='button'
                            className="fs-5 text-secondary fadeItem1s cardAnimation"
                            data-bs-target="#clientFormCarouselDesktop"
                            data-bs-slide="next">
                            Começar <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
                        </span>
                    )}


                </div>
            </div>

        </div>
    )

}