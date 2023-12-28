import { useEffect, useState } from "react";
import isMobile from "../../utils/isMobile";
import Icons from "../components/icons";
import  scrollTo  from '../../utils/scrollTo'


export default function Pagination(props) {

    const totalPages = Math.ceil(props.array.length / props.elementosPorPagina);

    // Cria um array de números de página
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);








    return (

        <div class="btn-group" role="group" aria-label="pagination">
            <button
                type="button"
                class="btn btn-outline-secondary"
                disabled={props.page === 1}
                onClick={() => { if (props.page !== 1) { scrollTo('clientsManagementList'); props.setPage(props.page - 1) } }}>
                {isMobile() ? <Icons icon="a-l" /> : 'Anterior'}
            </button>
            {pageNumbers.map(elem => {
                return (
                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        disabled={props.page === elem}
                        onClick={() => {props.setPage(elem); scrollTo('clientsManagementList')}}>
                        {elem}
                    </button>
                )
            })}
            <button
                type="button"
                class="btn btn-outline-secondary"
                disabled={props.page === totalPages}
                onClick={() => { if (props.page !== totalPages) return props.setPage(props.page + 1) }}>
                {isMobile() ? <Icons icon="a-r" /> : 'Próximo'}
            </button>
        </div>


        // <nav aria-label="Page navigation example">
        //     <ul class="pagination ">
        //         <li class="page-item ">
        //             <span class="page-link text-orange" disabled={props.page === 1}>
        //                 {isMobile() ? <Icons icon="a-l" /> : 'Anterior'}
        //             </span>
        //         </li>
        //         {pageNumbers.map(elem => {
        //             return (
        //                 <li class="page-item">
        //                     <span class="page-link text-orange" onClick={() => props.setPage(elem)}>
        //                         {elem}
        //                     </span>
        //                 </li>
        //             )
        //         })}

        //         <li class="page-item">
        //             <span class="page-link text-orange" selected>
        //                 {isMobile() ? <Icons icon="a-r" /> : 'Proximo'}
        //             </span>
        //         </li>
        //     </ul>
        // </nav >
    )
}