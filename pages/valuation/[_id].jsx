import { useRouter } from "next/router";
import Title from "../../src/components/title/Title2";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import navbarHide from "../../utils/navbarHide";




export default function ValuationPage(props) {

    const router = useRouter();
    const dispatch = useDispatch()


    const { _id } = router.query;

    useEffect(() => {
        navbarHide(dispatch)

    }, [])

    useEffect(() => {
        if (_id) {

            dataFunction(_id)
        }
    }, [_id])

    const dataFunction = async (_id) => {


        console.log("_id", _id)



    }


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