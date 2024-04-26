


export default function ValuationStatus(props) {


    return (
        <> {props.status === "answerd" ?
            <span class="ms-2 badge rounded-pill bg-success">Respondido</span>
            :
            <span class="ms-2 badge rounded-pill bg-warning">Aguardando responsta</span>
        }
        </>
    )




}