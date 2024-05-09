import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LandscapeCard from "../../components/userCard/LandscapeCard";
import PortraitCard from "../../components/userCard/PortraitCard";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Icons from "../../components/icons";




export default function ContentPage(props) {

    const userData = props.userData
    const clientData = props.clientData



    return (
        <div className="col-12 ">



            <div className="row  d-flex justify-content-center align-items-center">
                <div className="card " style={{ height: '98vh', width: '98vw', overflowY: 'scroll' }} >
                    <div className="row d-flex " >



                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-5 px-0 px-lg-5">
                            <div className="row px-5">

                                <span className="fs-3 fw-bold text-main">Olá, {clientData?.clientName}!</span>
                                <span className="fs-5 mt-3 text-main">Entender qual a posição do seu imóvel no mercado é o primeiro passo para realizar a venda com qualidade e segurança. Para isso, realizei um estudo feito com base nas características do seu imóvel e das ofertas de imóveis similares na região.</span>
                                <span className="fs-5 mt-3 text-main">O objetivo principal deste estudo é identificar qual o valor correto de venda. É este valor que irá posicionar o seu imóvel com destaque no mercado, não fazendo com que ele ajude a vender os imóveis concorrentes.</span>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-5  px-0 px-lg-5">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center align-items-center">

                                    <span className="fw-bold text-main">Estudo feito por:</span>
                                </div>
                                <div className="col-12 d-flex justify-content-center align-items-center">

                                    <PortraitCard
                                        firstName={userData?.firstName}
                                        lastName={userData?.lastName}
                                        creci={userData?.creci}
                                        email={userData?.workEmail}
                                        celular={userData?.celular}
                                        telefone={userData?.telefone}
                                        profileImageUrl={userData?.profileImageUrl}
                                        headerImg={userData?.backgroundImageUrl}
                                        logo={userData?.logo}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center  px-0 px-lg-5">
                            <span className="fs-2 fw-bold text-main text-center me-3">Estudo de mercado</span>
                        </div>

                    </div>
                    <div className="row my-5">
                        <div className="col-12 col-lg-6 d-flex justify-content-center  px-0 px-lg-5">
                            <div className="row px-5">

                                <span className="fs-4 fw-bold text-main">Relação do preço com a velocidade de venda.</span>
                                <span className="fs-5 mt-3 text-main">A velocidade de venda do seu imóvel está diretamente relacionada a precificação correta. Nosso histórico de vendas mostra que, imóveis com avaliações acima do preço de mercado, tem como resultado um processo de venda mais lento. Além de demorar mais, muitas vezes o valor final de venda é ainda inferior ao valor real de mercado, o que ocasiona perda de patrimônio.</span>
                                <div className="col-12 mt-4">
                                    <img src='/GIF_VALUATION_01.gif' alt="" className="w-100" />
                                </div>
                            </div>


                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center  px-0 px-lg-5">
                            <div className="row px-5 py-5">

                                <span className="fs-5 my-1 text-main"><FontAwesomeIcon icon={faCheck} className="me-1" style={{ color: '#00c661' }} />Venda dentro de um prazo mais curto.</span>
                                <span className="fs-5 my-1 text-main"><FontAwesomeIcon icon={faCheck} className=" me-1" style={{ color: '#00c661' }} />Menos inconvenientes.</span>
                                <span className="fs-5 my-1 text-main"><FontAwesomeIcon icon={faCheck} className=" me-1" style={{ color: '#00c661' }} />Mais clientes interessados, logo, um maior número de visitas.</span>
                                <span className="fs-5 my-1 text-main"><FontAwesomeIcon icon={faCheck} className=" me-1" style={{ color: '#00c661' }} />Corretores motivados em mostrar o imóvel aos seus clientes.</span>
                                <span className="fs-5 my-1 text-main"><FontAwesomeIcon icon={faCheck} className=" me-1" style={{ color: '#00c661' }} />Ofertas mais altas.</span>
                                <span className="fs-5 my-1 text-main"><FontAwesomeIcon icon={faCheck} className=" me-1" style={{ color: '#00c661' }} />Menos chances de perder dinheiro.</span>
                                <span className="fs-5 my-1 text-main"><FontAwesomeIcon icon={faCheck} className=" me-1" style={{ color: '#00c661' }} />Seu imóvel representado por apenas um corretor.</span>


                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center  px-0 px-lg-5">
                            <span className="fs-2 fw-bold text-main text-center me-3">Plano de Marketing</span>
                        </div>

                    </div>

                    <div className="row my-5">
                        <div className="col-12 col-lg-6 d-flex justify-content-center  px-0 px-lg-5">
                            <div className="row px-5 py-4">
                                <span className="fs-5 mt-3 text-main">Com nosso plano de marketing contemplamos todos os aspectos básicos necessários de divulgação e, através de um marketing digital de alta performance, colocarmos o seu imóvel para o maior número de clientes compradores possíveis.</span>

                            </div>
                        </div>

                        <div className="col-12 col-lg-6 d-flex justify-content-center  px-0 px-lg-5">
                            <div className="row px-5 py-4">
                                <div className="col-12 mt-4">
                                    <img src='/GIF_VALUATION_02.gif' alt="" className="w-100" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row my-5">
                        <div className="col-12 d-flex justify-content-center  px-0 px-lg-5">

                            <button className="btn btn-light btn-lg fw-bold"
                                data-bs-target="#valuationCarousel" data-bs-slide-to={2}>
                                Continuar <Icons icon='a-r' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}