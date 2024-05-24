import Link from "next/link";
import ValuationPropertyCollection from "./ValuationPropertyCollection";
import ValuationPropertyCalc from "./ValuationPropertyCalc";
import ValuationStatus from "./ValuationStatus";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { userStatusName } from "../../utils/permissions";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";



export default function Valuation(props) {

    const token = jwt.decode(Cookies.get("auth"));


    const client = props.client

    const propertyArray = props?.client?.valuation?.propertyArray

    const users = useSelector(state => state.users)

    const valuationUser = users?.find(elem => elem._id === client?.valuation?.user_id)



    const handleShare = async (url) => {
        try {
            await navigator.share({
                title: 'Avaliação do imóvel',
                text: 'Avaliação do imóvel',
                url: url
            });
            console.log('Conteúdo compartilhado com sucesso!');
            // router.push('/clientsManagement')
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    }



    return (
        <>
            {!client?.valuation ?
                <div className="row my-5">
                    <div className="col-12 d-flex justify-content-center text-center">
                        <span>Nenhuma avaliação feita</span>
                    </div>
                    <div className="col-12 d-flex justify-content-center text-center mt-2">
                        <Link href={"/valuation/" + client?._id}>
                            <button className="btn btn-orange" data-bs-dismiss="modal">Avaliar imóvel</button>
                        </Link>
                    </div>
                </div>

                :
                <div className="row">
                    <div className="col-12 d-flex justify-content-center my-3">
                        {client?.valuation?.status === 'pending' && (
                            <button className="btn btn-outline-orange mx-1"
                                onClick={() => handleShare(client?.valuation?.urlToken + '&userId=' + token.sub)}>
                                Compartilhar avaliação
                            </button>
                        )}
                        <button className="btn btn-outline-orange mx-1">Baixar PDF</button>

                    </div>

                    <div className="col-12 d-flex">


                        <label htmlFor="" className="fw-bold mb-2">Status: </label>
                        <div>
                            <ValuationStatus client={client?.valuation?.status} />
                        </div>
                    </div>


                    <div className="col-12">

                        <label htmlFor="" className="fw-bold mb-2">Avaliação feita por:</label>

                        <div className="col-12 col-lg-8">
                            <div className="card">

                                <div className="card-body">

                                    <div className="row d-flex">
                                        <div style={{ width: "70px" }}>
                                            <img src={valuationUser?.profileImageUrl} alt="" className="cardProfileImg2" height={50} />
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <span className="bold">{valuationUser?.firstName} {valuationUser?.lastName}</span>
                                            </div>
                                            <div className="row  small text-secondary">

                                                <span>
                                                    {valuationUser?.userStatus === "admGlobal" ? <FontAwesomeIcon icon={faUserGear} /> : <FontAwesomeIcon icon={faUserTie} />} {valuationUser?.userStatus === 'admGlobal' ? 'Administrador' : 'Corretor'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>

                    <ValuationPropertyCalc client={client} />
                    <div className="col-12">
                        <label htmlFor="" className="fw-bold mb-2">Imóveis para comparação</label>


                        <ValuationPropertyCollection
                            propertyArray={propertyArray} />



                    </div>


                </div>
            }
        </>
    )
}