import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import isMobile from "../../utils/isMobile"
import { handleIcon, handleIconColor } from "../components/icons/propertyTypeIcons"
import styles from './ClientCard.module.scss'
import { faEdit, faEye, faMoneyCheckDollar, faShare, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import tippy from "tippy.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import ClientStatus from "../clientsManagement/ClientStatus"
import { replaceAmpersand } from "../../utils/replaceAmpersand"
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useSelector } from "react-redux"
import formatDate from "../../utils/formatDate"
import ClientFeatures from "../clientsManagement/ClientFeatures"
import { showClientInfo } from "../../utils/showClientInfo"
import Link from "next/link"
import HandleButtons from "../clientsManagement/HandleButtons"

export default function ClientCardInfo(props) {

    const token = jwt.decode(Cookies.get('auth'))

    const users = useSelector(state => state.users)





    const client = props.elem



    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? client?.files.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === client?.files.length - 1 ? 0 : prevIndex + 1));
    };

    const handleShare = async (url) => {
        try {
            await navigator.share({
                title: 'Formulário de Cadastro de Imóvel',
                text: 'Formulário de Cadastro de Imóvel',
                url: url
            });
            console.log('Conteúdo compartilhado com sucesso!');
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    }





    return (
        <div class="card my-2 cardAnimation shadow h-100" style={{ width: "100%" }} >


            {!client?.files?.length ?
                <div className=" d-flex card-img-top justify-content-center align-items-center bg-light bg-gradient" style={{ height: '120px' }}>
                    <span className="text-secondary">Sem fotos</span>
                </div>
                :
                <>
                    <div className="text-center card-img-top  " style={{ backgroundColor: '#f0f2f5' }}>


                        <img src={client?.files[0]?.url ? client?.files[0]?.url : URL.createObjectURL(client?.files[0])} className={`card-img-top  ${styles.clientCardImage}`} />

                    </div>
                </>

            }

            {client?.propertyType && (

                <span className={`${styles.propertyTypeHeader} d-flex align-items-center text-white  ${handleIconColor(props.elem.propertyType)}`}  >

                    {!isMobile() ?
                        <div className="small  me-2" >
                            {client?.propertyType}
                        </div>
                        :
                        <div className="small  me-1" style={{ fontSize: '12px' }} >
                            {client?.propertyType}
                        </div>

                    }
                    <FontAwesomeIcon icon={handleIcon(client?.propertyType)} className={`icon`} />
                </span>
            )}

            {/* </div> */}
            <div className={`row d-flex justify-content-end ${styles.profilePosition}`}>

                <span className="d-flex align-items-center">
                    <div className="small bold bg-white pe-3 ps-2" style={{ borderRadius: '5px 0 0 5px', position: 'relative', right: '-10px' }}>

                        {users?.find(elem => elem._id === client?.user_id)?.firstName}{' '}
                        {users?.find(elem => elem._id === client?.user_id)?.lastName}
                    </div>
                    <div className="cardProfileImg">

                        <img className="cardProfileImg2 bold border border-4 border-white" style={{ position: 'relative' }}
                            src={users?.find(elem => elem._id === client?.user_id)?.profileImageUrl} alt="" />

                    </div>
                </span>

            </div>
            <div class="card-body">

                <div className="row ">
                    <div className="col-12">

                        <h6 class="mb-0 text-start"> {client?.clientName} {client.clientLastName} </h6>
                        <div className="d-flex align-items-center">
                            <div>

                                <ClientStatus status={client?.status} id={client?._id} />

                            </div>
                        </div>
                    </div>
                </div>

                <ClientFeatures client={client} elem={props.elem} small />

                {client?.status !== 'outdated' && (
                    <div className="row d-flex justify-content-center mt-2">
                        <div className="col-12 d-flex justify-content-center">

                            <div class="btn-group" role="group" aria-label="Basic example">
                                <Link href={`/clientsManagement?client_id=${client._id}`} passHref>
                                    <button
                                        type="button"
                                        class="btn btn-light border"
                                        id={"viewClientButton" + client._id}                               >
                                        <FontAwesomeIcon icon={faEye} className="icon  text-secondary" />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                )}












                <hr />
                <div>
                    <small style={{ fontSize: '12px' }} className="text-secondary">
                        {props.elem.dateAdded ? 'Data de cadastro: ' + formatDate(props.elem.dateAdded) : ''}
                    </small>
                </div>

            </div>
        </div >
    )
}