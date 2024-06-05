



export default function ErrorPage(props) {

    return (
        <div className="col-12 ">
            <div className="row  d-flex justify-content-center align-items-center">
                <div className="card " style={{ height: '98vh', width: '98vw', overflowY: 'scroll' }} >
                    <div className="row d-flex align-items-center justify-content-center  h-100">
                        <div className="col-12 col-lg-6">
                            <div className="row d-flex justify-content-center px-2">
                                <div className="col-12 d-flex justify-content-center text-center mt-3">
                                    <span>Imóvel não encontrado</span>

                                </div>
                                <div className="col-12 d-flex justify-content-center text-center mt-3">
                                    <span>Entre em contato com o seu corretor de imóveis</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}