import React, { useRef, useEffect } from 'react'
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {

    const positionMarker = useRef()
    const [position, setPosition] = React.useState(null);

    useEffect(() => {
        console.log("positionMarker", positionMarker)
    }, [positionMarker])


    const { isLoaded } = useJsApiLoader({
        id: 'avalia-imobi',
        googleMapsApiKey: "AIzaSyAU54iwv20-0BDGcVzMcMrVZpmZRPJDDic",
        libraries: ['places']
        // language: "pt-BR",
        // region: "BR",
    })


    const handlePlaceSelect = (place) => {

        console.log("place", place)
        // const lat = place.geometry.location.lat();
        // const lng = place.geometry.location.lng();

        // setPosition({
        //   lat,
        //   lng
        // });
    };


    // {
    //   version: "weekly",
    //     apiKey: "AIzaSyAU54iwv20-0BDGcVzMcMrVZpmZRPJDDic",
    //       id: "avalia-imobi",
    //         libraries: ["places"],
    //           language: "pt-BR",
    //             region: "BR",
    //               mapIds: [],
    //                 nonce: "",
    //                   url: "https://maps.googleapis.com/maps/api/js",
    //                     authReferrerPolicy: "origin"
    // }


    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <>
            <div className="row">
                <div className="col-12">
                    <Autocomplete
                        onPlaceChanged={(e) => handlePlaceSelect(e)}>
                        <input
                            type="text"
                            placeholder='Pesquisar'
                            className="form-control"
                            ref={positionMarker} />
                    </Autocomplete>

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <GoogleMap
                        containerStyle={{ width: '100%' }}
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        <Marker position={center} />
                    </GoogleMap>

                </div>
            </div>


        </>

    ) : <></>
}

export default React.memo(Map)