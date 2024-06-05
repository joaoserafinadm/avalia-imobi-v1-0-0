



export default function DownloadPage(props) {

    return (
        <div className="col-12 ">
            <div className="row  d-flex justify-content-center align-items-center">
                <div className="card " style={{ height: '98vh', width: '98vw', overflowY: 'scroll' }} >
                    <div className="row d-flex align-items-center justify-content-center  h-100">
                        <div className="col-12 col-lg-6">
                            <div className="row text-center">
                                <div className="col-12 mt-3">
                                    <img src={props.userData?.logo ? props.userData?.logo : ""} alt="" height={"100px"} />
                                </div>
                                <div className="col-12 mt-3">
                                    <span className="fs-4">
                                        Muito obrigado pela preferência!
                                    </span>
                                </div>

                                <div className="col-12 mt-3">
                                    <span className="fs-4">
                                        Clique o botão abaixo para fazer o download do PDF completo da avaliação do seu imóvel
                                    </span>
                                </div>
                                <div className="col-12 mt-3">



                                    <button className="btn btn-outline-secondary btn-lg">
                                        Baixar PDF
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}