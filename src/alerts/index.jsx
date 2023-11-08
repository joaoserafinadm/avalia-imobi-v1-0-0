import { useSelector } from "react-redux"
import styles from "./alerts.module.scss"


export default function Alerts() {

    const alertsArray = useSelector(state => state.alerts)



    return (
        <div className={`${styles.alertsPosition}`}>
            {alertsArray.map((elem, index) => {

                if (elem.type === 'addUserLink') {

                    return (
                        <div class="alert bg-orange alert-dismissible fade show fadeItem" role="alert" >
                            <span> {elem.message} </span>
                            <p>{elem.link}</p>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )

                }

            })}


        </div>
    )
}