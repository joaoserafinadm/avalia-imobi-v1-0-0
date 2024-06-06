import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




export default function ServiceAvaliation(props) {

    const { client } = props

    return (

        <div className="col-12 mt-5 fadeItem">


            <div className="row text-center">
                <span htmlFor="" className="fw-bold mb-2">Avaliação do atendimento</span>

                <div className="col-12 d-flex justify-content-center">
                    <div className="col-12 col-lg-8 text-center">

                        <span className="cardAnimation" >
                            <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${client?.valuation?.stars >= 1 ? 'text-warning' : 'text-secondary'}`} />
                        </span>
                        <span className="cardAnimation" >
                            <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${client?.valuation?.stars >= 2 ? 'text-warning' : 'text-secondary'}`} />
                        </span>
                        <span className="cardAnimation" >
                            <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${client?.valuation?.stars >= 3 ? 'text-warning' : 'text-secondary'}`} />
                        </span>
                        <span className="cardAnimation" >
                            <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${client?.valuation?.stars >= 4 ? 'text-warning' : 'text-secondary'}`} />
                        </span>
                        <span className="cardAnimation" >
                            <FontAwesomeIcon icon={faStar} className={`fs-1 mx-1 text-secondary ${client?.valuation?.stars >= 5 ? 'text-warning' : 'text-secondary'}`} />
                        </span>
                    </div>




                </div>

            </div>
            <div className="row text-center mt-5">
                <span htmlFor="" className="fw-bold mb-2">Comentário sobre o atendimento</span>

                <div className="col-12 d-flex justify-content-center">
                    <textarea className="form-control" rows="3" value={client?.valuation?.valuationComment} disabled></textarea>



                </div>

            </div>
        </div>

    )


}