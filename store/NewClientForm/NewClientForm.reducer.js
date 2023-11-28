
const initialValues = {
    slide: 0,
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
    profileImageUrl: '',
    propertyType: '',
}

export default function inventoryStatesReducer(state = {
    slide: 0,
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
    profileImageUrl: '',
    propertyType: '',
}, action) {
    switch (action.type) {
        case 'INITIAL_VALUES':
            return action.payload

        case 'SET_SLIDE':
            return { ...state, slide: action.payload }

        case 'SET_CLIENT_ID':
            return { ...state, client_id: action.payload }

        case 'SET_CLIENT_NAME':
            return { ...state, clientName: action.payload }

        case 'SET_CLIENT_LAST_NAME':
            return { ...state, clientLastName: action.payload }

        case 'SET_EMAIL':
            return { ...state, email: action.payload }

        case 'SET_CELULAR':
            return { ...state, celular: action.payload }

        case 'SET_STYLE':
            return { ...state, styles: action.payload }

        case 'SET_LOGO':
            return { ...state, logo: action.payload }

        case 'SET_BACKGROUND_IMG':
            return { ...state, backgroundImg: action.payload }

        case 'SET_COMPANY_NAME':
            return { ...state, companyName: action.payload }

        case 'SET_USER_ID':
            return { ...state, user_id: action.payload }

        case 'SET_USER_FIRST_NAME':
            return { ...state, userFirstName: action.payload }

        case 'SET_USER_LAST_NAME':
            return { ...state, userLastName: action.payload }

        case 'SET_PROFILE_IMAGE_URL':
            return { ...state, profileImageUrl: action.payload }

        case 'SET_PROPERTY_TYPE':
            return { ...state, propertyType: action.payload }



        default: return state
    }
}