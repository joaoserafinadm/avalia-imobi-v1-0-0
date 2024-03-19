import Link from "next/link";




export default function Valuation(props) {

    const client = props.client


    return (
        <div className="row my-5">
            <div className="col-12 d-flex justify-content-center text-center">
                <span>Nenhuma avaliação feita</span>
            </div>
            <div className="col-12 d-flex justify-content-center text-center mt-2">
                <Link href={"/valuation/" + client?._id}>
                    <button className="btn btn-orange" data-bs-dismiss="modal">Avaliar imóvel</button>
                </Link>
            </div>
        </div>
    )
}