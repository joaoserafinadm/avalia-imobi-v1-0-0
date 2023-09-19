
import Cookies from 'js-cookie'
import styles from './userCard.module.scss'
import jwt from 'jsonwebtoken'


export default function PortraitCard(props) {

    const token = jwt.decode(Cookies.get('auth'))




    return (
        <div className={`${styles.main} shadow`}>
            <div className={`${styles.header}`}>
            </div>
            <div className={`${styles.profilePicRow}`}>

                <img className={`${styles.profilePicture}`} src={token.profileImageUrl} alt="" />
            </div>
            <div className={`${styles.body}`}>
                <div className="col-12 mt-2 d-flex justify-content-center">
                    <span className='fs-5'>{props.firstName} {token.lastName}</span>
                </div>
                <div className="col-12 mt-2 d-flex justify-content-center">
                    <span className='small'>

                        Creci: 72636F | (54) 99989-0835
                    </span>
                </div>
                <div className="col-12 mt-2 d-flex justify-content-center">
                    <span className='small'>

                        joaoserafin.adm@gmail.com
                    </span>
                </div>
            </div>
        </div>
    )
}