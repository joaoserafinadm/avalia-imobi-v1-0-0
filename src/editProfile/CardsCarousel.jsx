import LandscapeCard from "../components/userCard/LandscapeCard";
import LandscapeCardBack from "../components/userCard/LandscapeCardBack";
import PortraitCard from "../components/userCard/PortraitCard";




export default function CardsCarousel(props) {



    return (

        <div className="col-6">
            <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="8000">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="my-5">

                                <PortraitCard
                                    firstName={props.firstName}
                                    lastName={props.lastName}
                                    creci={props.creci}
                                    email={props.email}
                                    celular={props.celular}
                                    telefone={props.telefone}
                                    profileImageUrl={props.profileImageUrl}
                                    headerImg={props.headerImg}
                                    logo={props.logo}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item " data-bs-interval="8000">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="my-5">
                                <div className="my-3">


                                    <LandscapeCard
                                        firstName={props.firstName}
                                        lastName={props.lastName}
                                        creci={props.creci}
                                        email={props.email}
                                        celular={props.celular}
                                        telefone={props.telefone}
                                        profileImageUrl={props.profileImageUrl}
                                        headerImg={props.headerImg}
                                        logo={props.logo}
                                        logradouro={props.logradouro}
                                        numero={props.numero}
                                        cidade={props.cidade}
                                        estado={props.estado}
                                    />
                                </div>
                                <div className="my-3">

                                    <LandscapeCardBack
                                        headerImg={props.headerImg}
                                        logo={props.logo}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}