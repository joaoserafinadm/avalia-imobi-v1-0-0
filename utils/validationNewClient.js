


export default function validationNewClient(client) {

    console.log("client", client)

    if (!client?.clientName ||
        !client?.propertyType ||
        !client?.areaTotal) {

        return false
    } else {
        return true
    }



}