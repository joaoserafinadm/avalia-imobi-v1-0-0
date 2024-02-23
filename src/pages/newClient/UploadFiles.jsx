import { useState } from "react"
import StyledDropzone from "../../components/styledDropzone/StyledDropzone"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFiles } from "../../../store/NewClientForm/NewClientForm.actions"




export default function UploadFiles(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    const [filesArray, setFilesArray] = useState([])
    const [forceUpdate, setForceUpdate] = useState(0)


    useEffect(() => {
        props.setFiles(filesArray)
    }, [filesArray.length])


    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Fotos</label>
            <div className="col-12">

                <div className="row">
                    <label htmlFor="" className="form-label">Importe as fotos do seu imóvel:</label>


                    <StyledDropzone setFiles={array => { setFilesArray(filesArray.concat(array)); setForceUpdate(forceUpdate + 1) }} img baseStyle multiFiles>
                        <div className="row mt-3 d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                            <div className="col-12 d-flex justify-content-center align-items-center" >
                                <span>
                                    <small className="text-center">
                                        Clique aqui ou arraste as imagens
                                    </small>
                                </span>
                            </div>
                        </div>
                    </StyledDropzone>

                    <div className="col-12 my-2 d-flex align-items-center mb-5" style={{ "overflowX": 'scroll' }}>


                        {filesArray.map((elem, index) => {
                            return (
                                <div className="m-3 d-flex justify-content-center align-items-top">
                                    <img src={URL.createObjectURL(elem)} alt="logo" id="logoItem" className="fileImgs fadeItem" />
                                    <button type="button" class="btn-close ms-1" aria-label="Close" onClick={() => { setFilesArray([...filesArray.slice(0, index), ...filesArray.slice(index + 1)]) }}></button>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}