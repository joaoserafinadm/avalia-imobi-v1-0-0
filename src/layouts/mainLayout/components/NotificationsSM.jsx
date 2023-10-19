import styles from './Notifications.module.scss'
import Icons from '../../../components/icons'
import Link from 'next/link'

export default function NotificationsSM(props) {



    return (
        <div className={`${styles.cardSizeSM} fadeItem `}>
            <div className="row mb-2">
                <div className="col-12 d-flex justify-content-center align-itens-center">

                    <span className='bold'>Notificações</span>
                </div>
            </div>
            <hr />
            <div className={`${styles.cardInner} fadeItem `}>


                {!!props.notifications.length && props.notifications.map(elem => {
                    return (
                        <Link href={elem.link} key={elem._id}>
                            <span type='button' className={`${styles.hover} d-flex justify-content-center align-items-center py-2`} >

                                <span className="col-12 d-flex ">
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <img src={elem.imageUrl} alt="" height={30} />
                                        <div style={{ position: "absolute" }}>

                                            {!elem.checked && (
                                                <div className="notificationIcon fadeItem">
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-10 d-flex justify-content-start align-items-center">
                                        <span className={`${styles.p}`}>
                                            {elem.text}
                                        </span>
                                    </div>
                                </span>
                            </span>
                        </Link>
                    )
                })}
                

            </div>

            <div className={`row mb-2 ${styles.notificationsFooter}`}>
                <hr className='py-0 my-0' />
                <div className="col-12 d-flex justify-content-center align-itens-center">


                    <span type='button' className='span p'>Visualizar todas as notificações <Icons icon='a-l' /></span>
                </div>
            </div>





        </div>
    )
}