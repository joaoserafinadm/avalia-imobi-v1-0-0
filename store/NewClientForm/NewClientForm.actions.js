export function initialValues() {
    return {
        type: 'INITIAL_VALUES',
        payload: {
            client_id: '',
            clientName: '',
            clientLastName: '',
            email: '',
            celular: '',
            styles: '',
            logo: '',
            backgroundImg: '',
            companyName: '',
            user_id: '',
            userFirstName: '',
            userLastName: '',
            profileImageUrl: ''
        }
    }
}

export function setSlide(data) {
    return {
        type: 'SET_SLIDE',
        payload: data
    }
}

export function setClient_id(data) {
    return {
        type: 'SET_CLIENT_ID',
        payload: data
    }
}

export function setClientName(data) {
    return {
        type: 'SET_CLIENT_NAME',
        payload: data
    }
}

export function setClientLastName(data) {
    return {
        type: 'SET_CLIENT_LAST_NAME',
        payload: data
    }
}

export function setEmail(data) {
    return {
        type: 'SET_EMAIL',
        payload: data
    }
}

export function setCelular(data) {
    return {
        type: 'SET_CELULAR',
        payload: data
    }
}

export function setStyle(data) {
    return {
        type: 'SET_STYLE',
        payload: data
    }
}

export function setLogo(data) {
    return {
        type: 'SET_LOGO',
        payload: data
    }
}

export function setBackgroundImg(data) {
    return {
        type: 'SET_BACKGROUND_IMG',
        payload: data
    }
}

export function setCompanyName(data) {
    return {
        type: 'SET_COMPANY_NAME',
        payload: data
    }
}

export function setUser_id(data) {
    return {
        type: 'SET_USER_ID',
        payload: data
    }
}

export function setUserFirstName(data) {
    return {
        type: 'SET_USER_FIRST_NAME',
        payload: data
    }
}

export function setUserLastName(data) {
    return {
        type: 'SET_USER_LAST_NAME',
        payload: data
    }
}

export function setProfileImageUrl(data) {
    return {
        type: 'SET_PROFILE_IMAGE_URL',
        payload: data
    }
}

export function setPropertyType(data) {
    return {
        type: 'SET_PROPERTY_TYPE',
        payload: data
    }
}



