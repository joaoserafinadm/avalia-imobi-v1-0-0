


export function maskCep(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
}


export function maskMoney(value) {
    const inputNumero = parseFloat(value.replace(/[^\d]/g, ''));
    const formatoMonetario = inputNumero.toLocaleString('pt-BR', {
        style: 'decimal',
        // currency: 'BRL',
    });
    return formatoMonetario;
};
