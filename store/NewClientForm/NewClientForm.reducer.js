
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
    features: []
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
    areaTotal: '',
    areaTotalPrivativa: '',
    quartos: '',
    suites: '',
    banheiros: '',
    vagasGaragem: '',
    sacadas: '',
    andar: '',
    cep: '',
    cidade: '',
    uf: '',
    logradouro: '',
    numero: '',
    bairro: '',
    latitude: '',
    longitude: '',
    features: []
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

        case 'SET_AREA_TOTAL':
            return { ...state, areaTotal: action.payload }

        case 'SET_AREA_TOTAL_PRIVATIVA':
            return { ...state, areaTotalPrivativa: action.payload }

        case 'SET_QUARTOS':
            return { ...state, quartos: action.payload }

        case 'SET_SUITES':
            return { ...state, suites: action.payload }

        case 'SET_BANHEIROS':
            return { ...state, banheiros: action.payload }

        case 'SET_VAGAS_GARAGEM':
            return { ...state, vagasGaragem: action.payload }

        case 'SET_SACADAS':
            return { ...state, sacadas: action.payload }

        case 'SET_ANDAR':
            return { ...state, andar: action.payload }

        case 'SET_CEP':
            return { ...state, cep: action.payload }

        case 'SET_CIDADE':
            return { ...state, cidade: action.payload }

        case 'SET_UF':
            return { ...state, uf: action.payload }

        case 'SET_LOGRADOURO':
            return { ...state, logradouro: action.payload }

        case 'SET_NUMERO':
            return { ...state, numero: action.payload }

        case 'SET_BAIRRO':
            return { ...state, bairro: action.payload }

        case 'SET_LATITUDE':
            return { ...state, latitude: action.payload }

        case 'SET_LONGITUDE':
            return { ...state, longitude: action.payload }

        case 'SET_FEATURES':
            return { ...state, features: action.payload }

        case 'DELETE_FEATURE':
            return { ...state, features: action.payload }


        default: return state
    }
}