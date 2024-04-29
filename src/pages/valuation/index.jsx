import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "../../../utils/baseUrl";
import { SpinnerLG } from "../../components/loading/Spinners";




export default function ValuationPage() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryClientId = urlSearchParams.get("clientId");
    const queryUserId = urlSearchParams.get("userId");
    const queryView = urlSearchParams.get("view");

    const [loadingPage, setLoadingPage] = useState(true)


    useEffect(() => {
        dataFunction(queryUserId, queryClientId)
    }, [])


    const dataFunction = async (user_id, client_id) => {

        const data = {
            user_id,
            client_id
        }

        await axios.get(`${baseUrl()}/api/valuation/valuationView`, {
            params: data
        }).then(res => {
            setLoadingPage(false)
            console.log('res', res)
        }).catch(e => {
            setLoadingPage(false)
            console.log('e', e)

        })

    }


    return (
        <div>
            {loadingPage ?
                <div className=" d-flex align-items-center" style={{ height: '100vh' }}>
                    <SpinnerLG />
                </div>
                :
                <>
                Apresentação do imóvel

                </>

            }
        </div>
    )
}