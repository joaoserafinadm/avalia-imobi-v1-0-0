import React, { useRef, useEffect, useState, useCallback } from 'react'
import { GoogleMap, Marker, useJsApiLoader, Autocomplete, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const libraries = ['places']


export default function Map(props) {

    const newClientForm = useSelector(state => state.newClientForm)

    const slide = newClientForm.slide

    const positionMarker = useRef()
    const [position, setPosition] = useState(null);
    const [zoom, setZoom] = useState(props.valuationPage ? 14 : 15)
    const [map, setMap] = useState(null)
    const [showInfo, setShowInfo] = useState(false)



    const { isLoaded } = useJsApiLoader({
        id: 'avalia-imobi',
        googleMapsApiKey: "AIzaSyAU54iwv20-0BDGcVzMcMrVZpmZRPJDDic",
        libraries: libraries,
        // language: 'pt-BR', // Define o idioma para português do Brasil
        // region: 'BR',
    })

    const containerStyle = {
        width: '100%',
        height: props.height ? props.height : '80vw'
    };

    const center = { lat: -27.6347491, lng: -52.2747035 }




    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!

        if (newClientForm.location) {

            const bounds = new window.google.maps.LatLngBounds(newClientForm.location);
            // const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);

            setMap(map)

        }
    }, [newClientForm.location])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])



    const onPlaceChanged = () => {
        if (positionMarker.current) {
            const autoCompleteService = new window.google.maps.places.AutocompleteService();

            autoCompleteService.getPlacePredictions(
                {
                    input: positionMarker.current.value,
                    componentRestrictions: { country: 'br' }, // Ajuste para o país desejado
                },
                (predictions, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions && predictions.length > 0) {
                        const placeId = predictions[0].place_id;

                        const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));

                        placesService.getDetails({ placeId }, (place, status) => {
                            if (status === window.google.maps.places.PlacesServiceStatus.OK) {

                                // Aqui estão algumas das informações disponíveis no objeto 'place'.
                                // Você pode explorar o objeto para obter mais detalhes conforme necessário.

                                const addressComponents = place.address_components;
                                const formattedAddress = place.formatted_address;
                                const location = place.geometry.location.toJSON();

                                // console.log("Address Components:", addressComponents);
                                // console.log("Formatted Address:", formattedAddress);
                                // console.log("Location:", location);

                                setPosition(location)
                                map.panTo(location)
                                setZoom(15)

                                // Agora você pode manipular essas informações conforme necessário.
                            }
                        });
                    }
                }
            );
        }
    };

    return isLoaded ? (
        <>
            {/* <div className="row">
                <div className="col-12">
                    <Autocomplete
                        onPlaceChanged={place => onPlaceChanged(place)} >
                        <input
                            type="text"
                            placeholder='Pesquisar'
                            className="form-control"
                            ref={positionMarker} />
                    </Autocomplete>

                </div>
            </div> */}

            <div className="row fadeItem">
                <div className="col-12" >

                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={props.location}
                        zoom={zoom}
                        // zoom={props.zoom}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,

                        }}
                    >
                        <Marker position={props.location}
                            label={{
                                // text: 'Seu imóvel',
                                // color: 'black', // Cor do texto do rótulo
                                // fontWeight: 'bold', // Peso da fonte do rótulo
                                // fontSize: '16px',

                            }}
                        />
                        {props.porpertyLocations?.map((elem, index) => {
                            return (
                                <Marker
                                    key={index}
                                    icon={{
                                        fillColor: 'blue', // Define a cor de preenchimento do ícone
                                        fillOpacity: 1, // Opacidade do preenchimento
                                        scale: 10, // Escala do ícone
                                        strokeColor: 'white', // Cor da borda do ícone
                                        strokeWeight: 2,
                                    }}
                                    position={{ lat: elem.latitude, lng: elem.longitude }}
                                    onClick={() => setShowInfo(true)} />

                            )
                        })}

                        {showInfo && (
                            <InfoWindow
                                anchor={1}
                            // onCloseClick={() => setInfoOpen(false)}
                            >
                                <div>
                                    <h3>dsaddsadsa</h3>
                                    <div>This is your info window content</div>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>

                </div>
            </div>


        </>

    ) : <></>
}
