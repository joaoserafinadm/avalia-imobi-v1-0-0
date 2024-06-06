


export default function ValuationStatus(props) {


    return (
        <> {props.status === "answered" ?
            <span class="ms-2 badge rounded-pill bg-primary">Respondido</span>
            :
            <span class="ms-2 badge rounded-pill bg-warning">Aguardando resposta</span>
        }
        </>
    )




}