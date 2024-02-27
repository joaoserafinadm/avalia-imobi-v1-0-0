


export default function formatDate(date) {

    const dateFormat = new Date(date)

    let day = dateFormat.getDate();
    let month = dateFormat.getMonth() + 1; // Os meses em JavaScript são indexados de 0 a 11
    let year = dateFormat.getFullYear();

    // Adicionando zeros à esquerda para garantir dois dígitos para dia e mês
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return day + '/' + month + '/' + year;
}