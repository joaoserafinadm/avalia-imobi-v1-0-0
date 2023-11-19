import { useEffect } from "react";
import { SpinnerLG } from "../../components/loading/Spinners";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import { useState } from "react";




export default function NewClient() {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryId = urlSearchParams.get("id");
    const queryToken = urlSearchParams.get("token");
    const queryClientId = urlSearchParams.get("clientId");
    const queryUserId = urlSearchParams.get("userId");

    const [loadingPage, setLoadingPage] = useState(true)

    useEffect(() => {
        dataFunction(queryUserId, queryClientId )
    }, [])

    const dataFunction = async (user_id, client_id) => {

        const data = {
            user_id,
            client_id
        }

        await axios.get(`${baseUrl()}/api/addClient/clientForm`, {
            params: data
        })
            .then(res => {
                setLoadingPage(false)
            }).catch(e => {
                console.log(e)
            })

    }


    return (
        <div>
            {loadingPage ?
                <div className=" d-flex align-items-center" style={{ height: '100vh' }}>
                    <SpinnerLG />
                </div>
                :
                <div>
                    FOIIII
                </div>
            }
        </div>
    )
}