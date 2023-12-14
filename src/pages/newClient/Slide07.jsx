import { TypeAnimation } from 'react-type-animation';
import styles from './newClient.module.scss'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export default function Slide07(props) {

    const newClientForm = useSelector(state => state.newClientForm)

    const slide = newClientForm.slide


    const [showEndLogo, setShowEndLogo] = useState(false)
    const [showSlide, setShowSlide] = useState(false)


    useEffect(() => {

        if (slide === 7) {
            setShowSlide(true)
            setTimeout(() => {
                setShowEndLogo(true)
            }, 8000)
        } else {
            setShowSlide(false)
            setShowEndLogo(false)
        }




    }, [slide])


    return (
        <>
            {showSlide && (
                <>

                    <div>

                        <img src={newClientForm.profileImageUrl} alt="logo" id="logoItem" className={`${styles.profileImage} ${styles.profileImagePosition} fadeItem1s `} />

                    </div>
                    <div className="card m-3 fadeItem1s" style={{ height: "90%" }}>
                        <div className="card-body">

                            <div className={`${styles.textPosition} px-1 fadeItem1s`}>
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

                            {showEndLogo && (

                                <div className="col-12 h-100 d-flex justify-content-center align-items-end">

                                    <div className={` d-flex justify-content-center align-items-center ${styles.logoBottom}`}>

                                        <div>


                                            <img src={newClientForm.logo} alt="logo" id="logoItem" className={`${styles.logoEnd}  fadeItem2s `} />
                                            {/* <img src={newClientForm.logo} alt="logo" id="logoItem" className={`${styles.logoEnd} ${styles.logoEndPosition} fadeItem2s `} /> */}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </>
            )}
        </>

    )
}