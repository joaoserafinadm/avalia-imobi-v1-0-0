import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import tippy from "tippy.js";



export default function ClientStatus(props) {

    // useEffect(() => {
    //     tippy("#clientStatus" + props.id, {
    //         content:
    //             props.status === 'outdated' ? 'Aguardando \n cadastro' :
    //                 props.status === 'active' ? 'Aguardando \n avaliação' :
    //                     props.status === 'evaluated' ? 'Avaliado' :
    //                         props.status === 'sold' ? 'Vendido' :
    //                             '',
    //         placement: 'bottom'
    //     })
    // })



    return (
        <>
            {props.status && (

                <span id={"clientStatus" + props.id}
                    className={'badge rounded-pill' + ' ' + props.status === 'outdated' ? 'badge rounded-pill bg-secondary' :
                        props.status === 'active' ? 'badge rounded-pill bg-warning' :
                            props.status === 'evaluated' ? 'badge rounded-pill bg-success ' :
                                props.status === 'answered' ? 'badge rounded-pill bg-primary ' :
                                    props.status === 'sold' ? 'badge rounded-pill bg-success' :
                                        'badge rounded-pill bg-secondary'} style={{ fontSize: '10px', fontWeight: '500', marginTop: '-10px' }}>

                    {props.status === 'outdated' ? 'Aguardando cadastro do imóvel' :
                        props.status === 'active' ? 'Aguardando  avaliação' :
                            props.status === 'evaluated' ? 'Avaliado' :
                                props.status === 'answered' ? 'Respondido' :
                                    props.status === 'sold' ? 'Vendido' :
                                        ''}

                </span>


                // <FontAwesomeIcon icon={faCircle} id={"clientStatus" + props.id}
                //     className={props.status === 'outdated' ? 'text-secondary' :
                //         props.status === 'active' ? 'text-warning' :
                //             props.status === 'evaluated' ? 'text-primary' :
                //                 props.status === 'sold' ? 'text-success' :
                //                     'text-secondary'} style={{ height: "12px" }} />
            )}
        </>
    )
    // return (
    //     <>
    //         {props.status && (
    //             <FontAwesomeIcon icon={faCircle} id={"clientStatus" + props.id}
    //                 className={props.status === 'outdated' ? 'text-secondary' :
    //                     props.status === 'active' ? 'text-warning' :
    //                         props.status === 'evaluated' ? 'text-primary' :
    //                             props.status === 'sold' ? 'text-success' :
    //                                 'text-secondary'} style={{ height: "12px" }} />
    //         )}
    //     </>
    // )
}