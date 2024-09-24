import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import isMobile from "../../utils/isMobile"
import { handleIcon, handleIconColor } from "../components/icons/propertyTypeIcons"
import styles from './ClientCard.module.scss'
import { faEdit, faEye, faMoneyCheckDollar, faShare, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import tippy from "tippy.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import ClientStatus from "./ClientStatus"
import { replaceAmpersand } from "../../utils/replaceAmpersand"
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useSelector } from "react-redux"
import formatDate from "../../utils/formatDate"
import ClientFeatures from "./ClientFeatures"
import { showClientInfo } from "../../utils/showClientInfo"
import Link from "next/link"
import HandleButtons from "./HandleButtons"
import { valueShow } from "../../utils/valueShow"

export default function ClientCard_02(props) {

    const token = jwt.decode(Cookies.get('auth'))

    const users = useSelector(state => state.users)





    const client = props.elem

    console.log("client", client)

    useEffect(() => {


        tippy("#viewClientButton" + props.elem._id, {
            content: "Visualizar",
            placement: 'bottom'
        });
        tippy("#deleteClientButton" + props.elem._id, {
            content: "Deletar",
            placement: 'bottom'
        });
        tippy("#evaluateClientButton" + props.elem._id, {
            content: "Avaliar",
            placement: 'bottom'
        });
        tippy("#editClientButton" + props.elem._id, {
            content: "Editar",
            placement: 'bottom'
        });
        tippy("#shareClientButton" + props.elem._id, {
            content: "Enviar formulário",
            placement: 'bottom'
        });
        tippy("#shareValuationButton" + props.elem._id, {
            content: "Compartilhar avaliação",
            placement: 'bottom'
        });
        tippy("#downloadValuationButton" + props.elem._id, {
            content: "Baixar PDF",
            placement: 'bottom'
        });

    }, [props.elem, props.section])



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
        <div class="card my-2 cardAnimation shadow" style={{ width: "100%" }} >


            {!client?.files?.length ?
                <div className=" d-flex card-img-top justify-content-center align-items-center bg-light bg-gradient" style={{ height: '170px' }}>
                    <span className="text-secondary">Sem fotos</span>
                </div>
                :
                <Swiper className="card-img-top "
                    style={{
                        '--swiper-navigation-color': '#5a5a5a',
                        '--swiper-pagination-color': '#f0f2f5',
                        '--swiper-navigation-size': '28px',
                        zIndex: 0
                    }}
                    slidesPerView={1}
                    pagination={{ clickable: false }}
                    navigation>
                    {client?.files?.map((elem, index) => (
                        <SwiperSlide key={index} className="text-center  " style={{ backgroundColor: '#f0f2f5' }}>


                            <img src={elem.url ? elem.url : URL.createObjectURL(elem)} className={`card-img-top  ${styles.clientCardImage}`} alt={`Slide ${index + 1}`} />

                        </SwiperSlide>
                    ))}
                </Swiper>

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

                        <h5 class="mb-0"> {client?.clientName} {client.clientLastName} </h5>
                        <div className="d-flex align-items-center">
                            <div>
                                <ClientStatus status={client?.status} id={client?._id} />
                            </div>
                        </div>
                    </div>
                   
                </div>

                <ClientFeatures client={client} elem={props.elem} />

                <HandleButtons client={client} setClientSelected={value => props.setClientSelected(value)} elem={props.elem} />












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