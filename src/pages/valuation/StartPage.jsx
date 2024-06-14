import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import Icons from "../../components/icons"




export default function StartPage(props) {

    const clientData = props.clientData
    const userData = props.userData

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setShowButton(true)
        }, 6000)
    }, [])




    return (
        <div className="row d-flex justify-content-center">
            <div className="col-12">
                <div className="row">


                    <div className=" my-2 col-12 col-lg-6 text-lg-end text-center">
                        <img src={userData?.profileImageUrl} alt="" className="rounded-circle border border-3 border-white" height={"180px"}/>
                    </div>
                    <div className=" my-2 col-12 col-lg-6  text-lg-start text-center text-white">
                        <div className="row mt-3 fs-5 px-1">
                            <TypeAnimation
                                sequence={[
                                    500,
                                    `A avaliação do seu imóvel foi concluída.`,
                                    200,
                                    `A avaliação do seu imóvel foi concluída.\nClique no botão abaixo para começar.`,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block', whiteSpace: 'pre-line' }}
                            />
                        </div>
                        {showButton && (

                            <div className="row mt-3 text-lg-start text-center fadeItem">
                                <div>
                                    <button className="btn btn-light" data-bs-target="#valuationCarousel" data-bs-slide-to={1}>

                                        Começar <Icons icon="a-r" className="icon ms-1" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}