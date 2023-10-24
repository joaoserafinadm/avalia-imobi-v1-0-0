
import styles from './userCard.module.scss'



export default function LandscapeCard(props) {


    return (
        <div className={`${styles.mainLS} shadow`}>
            <div className={`${styles.headerLS}`} style={{ backgroundImage: `linear-gradient(to right,#fff0, #fff), url(${props.headerImg})` }}>

            </div>
            <div className={`${styles.profilePicRowLS}`}>

                <img className={`${styles.profilePictureLS}`} src={props.profileImageUrl} alt="" />
            </div>
            {/* <div className={`${styles.bodyLS}`}>
                <div className="col-12  d-flex justify-content-center">
                    <span className='fs-5'>{props.firstName} {props.lastName}</span>
                </div>
                <div className="col-12  d-flex justify-content-center">
                    <span className='small'>

                        Creci: {props.creci} | {props.celular}
                    </span>
                </div>
                <div className="col-12  d-flex justify-content-center">
                    <span className='small'>
                        {props.email}
                    </span>
                </div>
                <div className="col-12  d-flex justify-content-center">
                    <img src={props.logo} alt="" style={{
                        maxHeight: "50px",
                        maxWidth: "130px",
                        height: "auto",
                        width: "auto"
                    }} />
                </div>
            </div> */}

        </div>
    )
}