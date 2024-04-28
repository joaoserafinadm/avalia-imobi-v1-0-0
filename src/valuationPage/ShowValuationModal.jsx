



export default function ShowValuationModal(props) {

    const valuationUrl = props.valuationUrl




    return (
        <div class="modal fade" id="showValuationModal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title-dark bold">Avaliação - Apresentação</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body-lg">
                        <iframe src={valuationUrl+'&userId='+props.token.sub} width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}