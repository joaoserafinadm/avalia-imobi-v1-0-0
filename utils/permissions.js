



export function isAdmin(userStatus) {

    if (userStatus === 'admGlobal') {
        return true
    } else {
        return false
    }

}