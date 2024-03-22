import { useEffect } from "react"
import tippy from "tippy.js"




export default function Info(props) {

    useEffect(() => {
        setTimeout(() => {
            tippy(`#${props.id}`, {
                content: props.content,
                placement: props.placement,
            })

        }, 1000)

    }, [])



    return (
        <span className={props.className + " bg-orange infoIcon fw-bold text-light"}
            id={props.id}>
            !
        </span>
    )
}