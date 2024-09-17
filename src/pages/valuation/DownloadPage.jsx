
import styles from './valuation.module.scss'


export default function DownloadPage(props) {

    const handleRestartValuation = () => {
        var myCarousel = document.querySelector('#valuationCarousel')
        var carousel = new bootstrap.Carousel(myCarousel)
        carousel.to(1)
    }

    return (
        <div className="col-12 ">
            <div className="row  d-flex justify-content-center align-items-center">
                <div className="card " style={{ height: '98vh', width: '98vw', overflowY: 'scroll' }} >
                    <div className="row d-flex align-items-center justify-content-center  h-100">
                        <div className="col-12 col-lg-6">
                            <div className="row text-center">
                                <div className="col-12 mt-3">
                                    <img src={props.userData?.logo ? props.userData?.logo : ""} alt="" className={styles.companyLogo} />
                                </div>
                                <div className="col-12 mt-3">
                                    <span className="fs-4">
                                        A equipe <b>{props.userData.companyName}</b> agradece a preferência!
                                    </span>
                                </div>
                                <div className="col-12 mt-3">
                                    <span className="fs-4">
                                        Em breve entrararemos em contato.
                                    </span>
                                </div>
                                <div className="col-12 mt-3">
                                    <button className="btn btn-outline-secondary btn-lg" onClick={() => handleRestartValuation()}>
                                        Visualizar novamente
                                    </button>
                                </div>



                                {/* <div className="col-12 mt-3">
                                    <span className="fs-4">
                                        Clique o botão abaixo para fazer o download do PDF completo da avaliação do seu imóvel
                                    </span>
                                </div>
                                <div className="col-12 mt-3">



                                    <button className="btn btn-outline-secondary btn-lg">
                                        Baixar PDF
                                    </button>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}