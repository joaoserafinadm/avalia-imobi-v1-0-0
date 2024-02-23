
import Map from "./Map";
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { useDispatch, useSelector } from "react-redux";
import { setBairro, setCep, setCidade, setLatitude, setLogradouro, setLongitude, setNumero, setUf } from "../../../store/NewClientForm/NewClientForm.actions";
import buscaCep from "../../../utils/buscaCep";
import { maskCep } from "../../../utils/mask";
import EstadosList from "../../components/estadosList";

const libraries = ['places']



export default function Location(props) {


    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    const [zoom, setZoom] = useState(16)

    const onBlurCep = async (event) => {

        const adress = await buscaCep(event)

        if (adress) {
            dispatch(setLogradouro(adress.logradouro))
            dispatch(setBairro(adress.bairro))
            dispatch(setCidade(adress.localidade))
            dispatch(setUf(adress.uf))
        }

    }



    const getCoordinates = async () => {
        try {
            // Construa o endereço a partir das partes disponíveis (logradouro, número, bairro, cidade, uf)
            const address = `${newClientForm.logradouro} ${newClientForm.numero}, ${newClientForm.bairro}, ${newClientForm.cidade}, ${newClientForm.uf}`;

            if (newClientForm.numero) {

                // Execute a geocodificação usando a API de Geocodificação do Google Maps
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                        address
                    )}&key=AIzaSyAU54iwv20-0BDGcVzMcMrVZpmZRPJDDic`
                );


                // Verifique se a resposta da API é bem-sucedida
                if (response.ok) {
                    const data = await response.json();


                    // Extraia as coordenadas da resposta
                    const location = data.results[0].geometry.location;

                    dispatch(setLatitude(location.lat))
                    dispatch(setLongitude(location.lng))

                    setZoom(16)

                    console.log(location)
                } else {
                    console.error('Erro ao obter coordenadas');
                }
            }

        } catch (error) {
            console.error('Erro ao obter coordenadas', error);
        }
    };


    return (
        <div className="row fadeItem mt-3">
            <label htmlFor="geralForm" className="form-label fw-bold">Localização</label>
            <div className="row">

                <div className="col-12 col-md-3 col-xl-2 my-2  pe-1">

                    <label for="geralForm" className="form-label">CEP<b>*</b></label>
                    <input
                        type="text"
                        className="form-control"
                        name="clientNameItem"
                        id="clientNameItem"
                        value={newClientForm.cep}
                        onChange={e => dispatch(setCep(maskCep(e.target.value)))}
                        onBlur={e => onBlurCep(e)} />
                </div>
                <div className="col-12 col-md-7 col-xl-4 my-2  pe-1">

                    <label for="geralForm" className="form-label">Logradouro</label>
                    <input
                        type="text"
                        className="form-control"
                        name="clientLastNameItem"
                        id="clientLastNameItem"
                        value={newClientForm.logradouro}
                        onChange={e => dispatch(setLogradouro(e.target.value))} />
                </div>
                <div className="col-12 col-md-2 col-xl-1  my-2  pe-1">

                    <label for="geralForm" className="form-label">Número</label>
                    <input
                        type="text"
                        className="form-control"
                        name="emailItem"
                        id="emailItem"
                        value={newClientForm.numero}
                        onBlur={() => getCoordinates()}
                        onChange={e => dispatch(setNumero(e.target.value))} />
                </div>
                <div className="col-12 col-md-5  col-xl-2 my-2  pe-1">

                    <label for="geralForm" className="form-label">Bairro<b>*</b></label>
                    <input
                        type="text"
                        className="form-control"
                        name="celularItem"
                        id="celularItem"
                        value={newClientForm.bairro}
                        onChange={e => dispatch(setBairro(e.target.value))} />
                </div>
                <div className="col-12 col-md-5 col-xl-2 my-2  pe-1">

                    <label for="geralForm" className="form-label">Cidade<b>*</b></label>
                    <input
                        type="text"
                        className="form-control"
                        name="celularItem"
                        id="celularItem"
                        value={newClientForm.cidade}
                        onChange={e => dispatch(setCidade(e.target.value))} />
                </div>



                <div className="col-12 col-md-2 col-xl-1 my-2  pe-1">

                    <label for="geralForm" className="form-label">Uf<b>*</b></label>

                    <select className="form-select" placeholder="Estado" value={newClientForm.uf} onChange={(e) => dispatch(setUf(e.target.value))}>
                        <EstadosList />
                    </select>
                </div>

                <div className="col-12 my-2 mb-4">
                    {newClientForm.latitude && newClientForm.longitude && (

                        <Map location={{ lat: newClientForm.latitude, lng: newClientForm.longitude }} zoom={18} height="300px"/>
                    )}

                </div>







            </div>
        </div >
    )
}