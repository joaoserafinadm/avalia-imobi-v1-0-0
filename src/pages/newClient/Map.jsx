import React, { useRef, useEffect, useState, useCallback } from 'react'
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from '@react-google-maps/api';

const libraries = ['places']


export default function Map() {

    const positionMarker = useRef()
    const [position, setPosition] = useState(null);
    const [zoom, setZoom] = useState(10)


    const { isLoaded } = useJsApiLoader({
        id: 'avalia-imobi',
        googleMapsApiKey: "AIzaSyAU54iwv20-0BDGcVzMcMrVZpmZRPJDDic",
        libraries: libraries,
        // language: 'pt-BR', // Define o idioma para português do Brasil
        // region: 'BR',
    })

    const containerStyle = {
        width: '100%',
        height: '500px'
    };

    const center = {lat: -27.6347491, lng: -52.2747035}



    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

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
                                console.log("Place object:", place);

                                // Aqui estão algumas das informações disponíveis no objeto 'place'.
                                // Você pode explorar o objeto para obter mais detalhes conforme necessário.

                                const addressComponents = place.address_components;
                                const formattedAddress = place.formatted_address;
                                const location = place.geometry.location.toJSON();

                                console.log("Address Components:", addressComponents);
                                console.log("Formatted Address:", formattedAddress);
                                console.log("Location:", location);

                                setPosition(location)
                                map.panTo(location)
                                setZoom(18)

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
            <div className="row">
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
            </div>

            <div className="row mt-4">
                <div className="col-12" style={{ width: '100%' }}>

                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={position}
                        zoom={zoom}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false
                        }}
                    >
                        <Marker position={position} />
                    </GoogleMap>

                </div>
            </div>


        </>

    ) : <></>
}
