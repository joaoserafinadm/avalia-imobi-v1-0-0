// import { MapContainer, Marker, Polygon, Popup, TileLayer, useMap } from 'react-leaflet'
// import { CRS } from 'leaflet'


export default function Map(props) {

    // const center = [51.505, -0.09]

    // const polygon = [
    //     [51.515, -0.09],
    //     [51.52, -0.1],
    //     [51.52, -0.12],
    // ]
    
    // // const coordenadas = [[-51.305214119290966, -27.596377623790801], [-51.304321314526419, -27.598190288009736], [-51.305674049018158, -27.599380694362466], [-51.307919588274451, -27.599191311533623], [-51.30924526807636, -27.596918717587496], [-51.309109994627185, -27.596485842550141], [-51.305214119290966, -27.596377623790801]]
    
    // const purpleOptions = { color: 'purple' }

    return (
        <div>teste</div>
        // <MapContainer
        //     center={center}
        //     zoom={3}
        //     crs={CRS.EPSG3857}
        //     style={{ height: '750px', width: "750px" }}>
        //     <TileLayer
        //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //     />
        //     <Marker position={[0, 0]}>
        //     <Popup>
        //         A pretty CSS3 popup. <br /> Easily customizable.
        //     </Popup>
        // </Marker>

        //     {props.features.map(elem => {
        //         const coordenadas = elem.geometry.coordinates[0][0]
        //         // const coordenadas = [[ 73.48890291643329, 85.12258652318269 ], [ 98.104068309767172, 61.17675362713635 ], [ 14.033342270471621, 51.540871106088161 ], [ 299675.81097598047927, 6895107.642471241764724 ], [ 299668.527055958635174, 6895609.213599386624992 ], [ 299689.840995341714006, 6895630.815107793547213 ], [ 299702.982880071096588, 6895644.134303666651249 ], [ 299712.172079870302696, 6895653.447484733536839 ], [ 299725.889087385265157, 6895664.116268357262015 ], [ 299742.100096266600303, 6895672.637439692392945 ], [ 299754.292991835565772, 6895678.456776212900877 ], [ 299773.48890291643329, 6895685.12258652318269 ]]

        //         console.log("coordenadas", coordenadas)


        //         return (
        //             <Polygon positions={coordenadas} onClick={() => console.log("foi carai")} >
        //                 <Popup >
        //                     <div style={{ width: '200px' }}>
        //                         <div className="row">
        //                             <input className="form-control akvo_form_control_sm" type="text" />
        //                         </div>
        //                         <div className="row mt-2">
        //                             <div className='d-flex justify-content-end'>
        //                                 <button className='btn btn-sm btn-success'>Salvar</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Popup>
        //             </Polygon >
        //         )
        //     })}


        // </MapContainer>
    )
}