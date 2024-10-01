export default function dateLimitValidate(dateLimit) {

    console.log("dateLimit", dateLimit)

    if (!dateLimit) {
        return true
    }
    // Verifica se dateLimit é uma instância válida de Date e não é "Invalid Date"
    if (!(dateLimit instanceof Date) || isNaN(dateLimit)) {
        throw new Error("Invalid date");
    }

    // Obtém a data atual sem a parte do tempo
    const currentDate = new Date().toISOString().slice(0, 10);
    // Obtém a data limite sem a parte do tempo
    const dateLimitStr = dateLimit.toISOString().slice(0, 10);

    // Retorna true se a data limite for menor ou igual à data atual, caso contrário false
    return dateLimitStr <= currentDate;
}
