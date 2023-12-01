import React, { useEffect } from "react";
import Map from "./Map";
import { Loader } from "@googlemaps/js-api-loader";



export default function Slide04(props) {


    


    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Informações Gerais</label>

            <Map />




        </div>
    )



}