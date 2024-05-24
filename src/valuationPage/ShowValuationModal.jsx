import { useState } from "react";
import Sections from "../components/Sections";
import { useRouter } from "next/router";




export default function ShowValuationModal(props) {

    const router = useRouter()

    const valuationUrl = props.valuationUrl

    const token = props.token

    const [section, setSection] = useState('Apresentação')

    const handleShare = async (url) => {
        try {
            await navigator.share({
                title: 'Avaliação do imóvel',
                text: 'Avaliação do imóvel',
                url: url
            });
            console.log('Conteúdo compartilhado com sucesso!');
            router.push('/clientsManagement')
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

                        <div className="container carousel  " data-bs-touch="false" data-bs-interval='false' id="showValuationSection">

                            <Sections section={section} idTarget="showValuationSection"
                                setSection={value => setSection(value)}
                                sections={["Apresentação", "PDF"]} />



                            <div className="carousel-inner ">
                                <div className="carousel-item active">

                                    <iframe src={valuationUrl + '&userId=' + token.sub + '&disabled=true'} width="100%" style={{ height: "100vh" }} frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className="carousel-inner ">
                                <div className="carousel-item ">
                                    dsadsa{valuationUrl}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" >Fechar</button>
                        <button type="button" class="btn btn-orange btn-sm">Baixar PDF</button>
                        <button type="button" class="btn btn-orange btn-sm" onClick={() => handleShare(valuationUrl + '&userId=' + token.sub)}>Compartilhar apresentação</button>
                    </div>
                </div>
            </div>
        </div>
    )
}