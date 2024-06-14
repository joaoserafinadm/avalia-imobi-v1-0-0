export default async function handleShare(url) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Avaliação do imóvel',
                text: 'Avaliação do imóvel',
                url: url
            });
            console.log('Conteúdo compartilhado com sucesso!');
            // router.push('/clientsManagement')
        } catch (error) {
            console.error('Erro ao compartilhar:', error);
        }
    } else {
        // Fallback para dispositivos que não suportam navigator.share
        try {
            await navigator.clipboard.writeText(url);
            alert('O link foi copiado para a área de transferência. Por favor, cole e compartilhe manualmente.');
            console.log('Link copiado para a área de transferência:', url);
            // router.push('/clientsManagement')
        } catch (error) {
            console.error('Erro ao copiar o link para a área de transferência:', error);
            alert('Não foi possível copiar o link para a área de transferência. Por favor, copie manualmente: ' + url);
        }
    }
};