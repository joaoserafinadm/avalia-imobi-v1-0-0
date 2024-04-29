



export default function ShowValuationModal(props) {

    const valuationUrl = props.valuationUrl

    const token = props.token

    const handleShare = async (url) => {
        try {
            await navigator.share({
                title: 'Avaliação do imóvel',
                text: 'Avaliação do imóvel',
                url: url
            });
            console.log('Conteúdo compartilhado com sucesso!');
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    }




    return (
        <div class="modal fade" id="showValuationModal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title-dark bold">Avaliação - Apresentação</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body-lg" style={{ height: "100vh" }}>
                        <iframe src={valuationUrl + '&userId=' + token.sub + '&view=true'} width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" >Fechar</button>
                        <button type="button" class="btn btn-orange btn-sm">Gerar PDF</button>
                        <button type="button" class="btn btn-orange btn-sm" onClick={() => handleShare(valuationUrl + '&userId=' + token.sub )}>Compartilhar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}