import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import tippy from "tippy.js";



export default function ClientStatus(props) {

    useEffect(() => {
        tippy("#clientStatus" + props.id, {
            content:
                props.status === 'outdated' ? 'Aguardando \n cadastro' :
                    props.status === 'active' ? 'Aguardando \n avaliação' :
                        props.status === 'evaluated' ? 'Avaliado' :
                            props.status === 'sold' ? 'Vendido' :
                                '',
            placement: 'bottom'
        })
    })



    return (
        <>
            {props.status && (
                <FontAwesomeIcon icon={faCircle} id={"clientStatus" + props.id}
                    className={props.status === 'outdated' ? 'text-secondary' :
                        props.status === 'active' ? 'text-warning' :
                            props.status === 'evaluated' ? 'text-primary' :
                                props.status === 'sold' ? 'text-success' :
                                    ''} style={{ height: "12px" }} />
            )}
        </>
    )
}