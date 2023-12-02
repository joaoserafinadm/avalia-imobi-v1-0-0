import React, { useRef, useEffect, useState, useCallback } from 'react'
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from '@react-google-maps/api';


export default function Map() {

    const positionMarker = useRef()
    const [position, setPosition] = React.useState(null);

    useEffect(() => {
        console.log("positionMarker", positionMarker)
    }, [positionMarker])

    const { isLoaded } = useJsApiLoader({
        id: 'avalia-imobi',
        googleMapsApiKey: "AIzaSyAU54iwv20-0BDGcVzMcMrVZpmZRPJDDic",
        libraries: ['places']
    })

    const containerStyle = {
        width: '100%',
        height: '500px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };



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



    const handlePlaceSelect = (place) => {

        console.log("place", place)
        // const lat = place.geometry.location.lat();
        // const lng = place.geometry.location.lng();

        // setPosition({
        //   lat,
        //   lng
        // });
    };

    return isLoaded ? (
        <>
            <div className="row">
                <div className="col-12">
                    <Autocomplete
                        onPlaceChanged={handlePlaceSelect()}>
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
                            containerStyle={containerStyle}
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={5}
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
