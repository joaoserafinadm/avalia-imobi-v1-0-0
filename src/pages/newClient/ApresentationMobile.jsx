import { TypeAnimation } from 'react-type-animation';
import styles from './newClient.module.scss'
import { useSelector } from 'react-redux';
import isMobile from '../../../utils/isMobile';


export default function ApresentationMobile(props) {

    const newClientForm = useSelector(state => state.newClientForm)


    return (
        <>
            <div className="card m-3 fadeItem1s" style={{ height: "90%" }}>
                <div>

                    <img src={newClientForm.profileImageUrl} alt="logo" id="logoItem" className={`${styles.profileImage} ${styles.profileImagePosition} fadeItem1s `} />

                </div>
                <div className="card-body">
                    <div style={{ width: '45vw', height: '90px' }} className="d-flex justify-content-center align-items-center">
                        {isMobile() && (

                            <img src={newClientForm.logo} alt="logo" id="logoItem" className={`${styles.logo} ${styles.logoPosition} fadeItem1s `} />
                        )}
                    </div>
                    <div className={`${styles.textPosition} px-1 fadeItem1s`}>
                        <TypeAnimation
                            sequence={[
                                200,
                                `Olá ${newClientForm.clientName}.`,
                                500,
                                `Olá ${newClientForm.clientName}.\nMe chamo ${newClientForm.userFirstName}, e irei te ajudar a avaliar o seu imóvel.`,
                                200,
                                `Olá ${newClientForm.clientName}.\nMe chamo ${newClientForm.userFirstName}, e irei te ajudar a avaliar o seu imóvel.\nPreencha o formulário de cadastro para que possamos começar.`,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1.5em', display: 'inline-block', whiteSpace: 'pre-line' }}
                        />
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">


                            {!isMobile() && (

                                <img src={newClientForm.logo} alt="logo" id="logoItem" className={`${styles.logo} ${styles.logoPosition} fadeItem1s `} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}