import styles from './Notifications.module.scss'
import Icons from '../../../components/icons'
import Link from 'next/link'

export default function Notifications(props) {



    return (
        <div className={`${styles.cardSize}`}>
            <div className="row mb-2">
                <div className="col-12 d-flex justify-content-center align-itens-center">

                    <span className='bold'>Notificações</span>
                </div>
            </div>
            <hr />

            {!!props.notifications.length && props.notifications.map(elem => {
                return (
                    <Link href={elem.link}>
                        <span type='button' className={`${styles.hover} d-flex justify-content-center align-items-center py-2`}>
                            <div className={`row `}>
                                <span className="col-12 d-flex ">
                                    <div className="col-2 d-flex justify-content-center align-items-center">
                                        <img src={elem.imageUrl} alt="" height={30} />
                                    </div>
                                    <div className="col-10 d-flex justify-content-center align-items-center">
                                        <span className={`${styles.p}`}>
                                            {elem.text}
                                        </span>
                                    </div>

                                </span>



                            </div>

                        </span>

                    </Link>
                )
            })}
            <hr />

            <div className="row mb-2">
                <div className="col-12 d-flex justify-content-center align-itens-center">

                    <span type='button' className='span p'>Visualizar todas as notificações <Icons icon='a-l' /></span>
                </div>
            </div>





        </div>
    )
}