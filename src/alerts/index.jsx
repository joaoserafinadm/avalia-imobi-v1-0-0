import { useDispatch, useSelector } from "react-redux"
import styles from "./alerts.module.scss"
import { removeAlert } from "../../store/Alerts/Alerts.actions"
import Link from "next/link"


export default function Alerts() {

    const alertsArray = useSelector(state => state.alerts)

    const dispatch = useDispatch()

    return (
        <div className={`${styles.alertsPosition}`}>
            {alertsArray.map((elem, index, array) => {

                if (elem.type === 'addUserLink') {

                    return (
                        <div class="alert bg-orange alert-dismissible fade show fadeItem" role="alert" >
                            <span> {elem.message} </span>

                            {/* <Link href={`${elem.link}`} target="_blank"> */}
                            <Link href={`whatsapp://send?text="${elem.link}"`} target="_blank">
                                <p>{elem.link}</p>
                            </Link>
                            <button type="button" class="btn-close" aria-label="Close" onClick={() => dispatch(removeAlert(alertsArray, index))}></button>
                        </div>
                    )

                }

            })}


        </div>
    )
}



// const 