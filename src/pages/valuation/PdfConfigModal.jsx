


export default function PdfConfigModal(props) {





    return (
        <div class="modal fade" id="pdfConfigModal" aria-labelledby="pdfConfigModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="pdfConfigModalLabel">Configuração do arquivo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-success">Baixar PDF</button>
                    </div>
                </div>
            </div>
        </div>
    )
}