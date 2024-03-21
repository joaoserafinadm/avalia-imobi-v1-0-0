export function initialValues() {
    return {
        type: 'INITIAL_VALUES',
        payload: {
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
            propertyName: '',
            propertyLink: '',
            areaTotal: '',
            areaTotalPrivativa: '',
            quartos: '',
            suites: '',
            banheiros: '',
            vagasGaragem: '',
            sacadas: '',
            andar: '',
            pavimentos: '',
            salas: '',
            cep: '',
            cidade: '',
            uf: '',
            logradouro: '',
            numero: '',
            bairro: '',
            latitude: '',
            longitude: '',
            features: [],
            files: []
        }
    }
}


export function porpertyTypeChange(data) {
    return {
        type: 'PROPERTY_TYPE_CHANGE',
        payload: {
            propertyName: '',
            propertyLink: '',
            areaTotal: '',
            areaTotalPrivativa: '',
            quartos: '',
            suites: '',
            banheiros: '',
            vagasGaragem: '',
            sacadas: '',
            andar: '',
            pavimentos: '',
            terrenoIrregular: false,
            largura: '',
            comprimento: '',
            frente: '',
            fundos: '',
            lateralEsquerda: '',
            lateralDireita: '',
            cep: '',
            cidade: '',
            uf: '',
            logradouro: '',
            numero: '',
            bairro: '',
            latitude: '',
            longitude: '',
            features: [],
            files: []
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

export function setPropertyName(data) {
    return {
        type: 'SET_PROPERTY_NAME',
        payload: data
    }
}

export function setPropertyLink(data) {
    return {
        type: 'SET_PROPERTY_LINK',
        payload: data
    }
}

export function setTerrenoIrregular(data) {
    return {
        type: 'SET_TERRENO_IRREGULAR',
        payload: data
    }
}
export function setLargura(data) {
    return {
        type: 'SET_LARGURA',
        payload: data
    }
}
export function setComprimento(data) {
    return {
        type: 'SET_COMPRIMENTO',
        payload: data
    }
}

export function setFrente(data) {
    return {
        type: 'SET_FRENTE',
        payload: data
    }
}

export function setFundos(data) {
    return {
        type: 'SET_FUNDOS',
        payload: data
    }
}
export function setLateralEsquerda(data) {
    return {
        type: 'SET_LATERAL_ESQUERDA',
        payload: data
    }
}

export function setLateralDireita(data) {
    return {
        type: 'SET_LATERAL_DIREITA',
        payload: data
    }
}

export function setAreaTotal(data) {
    return {
        type: 'SET_AREA_TOTAL',
        payload: data
    }
}



export function setAreaTotalPrivativa(data) {
    return {
        type: 'SET_AREA_TOTAL_PRIVATIVA',
        payload: data
    }
}

export function setQuartos(data) {
    return {
        type: 'SET_QUARTOS',
        payload: data
    }
}

export function setSuites(data) {
    return {
        type: 'SET_SUITES',
        payload: data
    }
}

export function setBanheiros(data) {
    return {
        type: 'SET_BANHEIROS',
        payload: data
    }
}

export function setVagasGaragem(data) {
    return {
        type: 'SET_VAGAS_GARAGEM',
        payload: data
    }
}

export function setSacadas(data) {
    return {
        type: 'SET_SACADAS',
        payload: data
    }
}

export function setAndar(data) {
    return {
        type: 'SET_ANDAR',
        payload: data
    }
}

export function setPavimentos(data) {
    return {
        type: 'SET_PAVIMENTOS',
        payload: data
    }
}

export function setSalas(data) {
    return {
        type: 'SET_SALAS',
        payload: data
    }
}

export function setCep(data) {
    return {
        type: 'SET_CEP',
        payload: data
    }
}

export function setCidade(data) {
    return {
        type: 'SET_CIDADE',
        payload: data
    }
}

export function setUf(data) {
    return {
        type: 'SET_UF',
        payload: data
    }
}

export function setLogradouro(data) {
    return {
        type: 'SET_LOGRADOURO',
        payload: data
    }
}

export function setNumero(data) {
    return {
        type: 'SET_NUMERO',
        payload: data
    }
}

export function setBairro(data) {
    return {
        type: 'SET_BAIRRO',
        payload: data
    }
}

export function setLatitude(data) {
    return {
        type: 'SET_LATITUDE',
        payload: data
    }
}

export function setLongitude(data) {
    return {
        type: 'SET_LONGITUDE',
        payload: data
    }
}

export function setFeatures(features, data) {

    let newFeatures = features.concat([data])
    return {
        type: 'SET_FEATURES',
        payload: newFeatures
    }
}

export function deleteFeature(features, data) {
    return {
        type: 'DELETE_FEATURE',
        payload: features.filter(feature => feature !== data)
    }
}

export function setFiles(files, data) {

    console.log('reduxFiles', files, data)

    let newFiles = files.concat(data)

    console.log('newFiles', newFiles)

    return {
        type: 'SET_FILES',
        payload: newFiles
    }
}

export function deleteFiles(files, index) {

    const newFiles = ([...files.slice(0, index), ...files.slice(index + 1)])


    return {
        type: 'DELETE_FILES',
        payload: newFiles
    }
}











