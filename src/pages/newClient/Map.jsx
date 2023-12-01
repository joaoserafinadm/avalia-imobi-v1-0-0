
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";


export default function Map() {

    const mapRef = React.useRef(null)

    useEffect(() => {
        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.GOOGLE_MAPS_API_KEY,
                version: 'weekly'
            })

            const {Map} =  await loader.importLibrary('maps')

            const position = {
                lat: -25.363,
                long: 131.044
            }

            const mapOptions  = {
                center: position,
                zoom: 8
            }

            //setup map
            const map = new Map(mapRef.current, mapOptions)

        }

        initMap()
    }, [])


    return (
        <div style={{height: '500px'}} ref={mapRef} />
            
    )
}