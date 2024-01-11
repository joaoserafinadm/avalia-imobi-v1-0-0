






export default function ViewClientModal(props) {




    return (
        <div class="modal fade" id="viewClientModal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title-dark">Visualizar Cliente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        Infos
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-orange btn-sm" data-bs-dismiss="modal" >Avaliar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}