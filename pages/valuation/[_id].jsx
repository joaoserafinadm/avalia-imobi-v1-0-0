import { useRouter } from "next/router";
import Title from "../../src/components/title/Title2";




export default function ValuationPage(props) {

    const router = useRouter();

    const { _id } = router.query;

    console.log("_id", _id)


    return (
        <div >
            <Title title={_id} backButton='/' />

            <div className="pagesContent-lg shadow fadeItem" id="pageTop">
                <div className="row">
                    <div className="col-12 d-flex justify-content-end ">
                        dsadsadsa

                    </div>
                </div>
            </div>
        </div>
    )



}