import { useState } from "react"
import StyledDropzone from "../../components/styledDropzone/StyledDropzone"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFiles } from "../../../store/NewClientForm/NewClientForm.actions"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";




export default function UploadFiles(props) {

    const newClientForm = useSelector(state => state.newClientForm)
    const dispatch = useDispatch()

    const [forceUpdate, setForceUpdate] = useState(0)
    


    useEffect(() => {
        props.setFiles(props.files)

    }, [props.files?.length])


    const handleOrderChange = (res) => {


        const { source, destination } = res

        // Verifica se há um destino válido
        if (!destination) return

        // Cria uma cópia do array atual
        const reorderedFiles = Array.from(props.files);


        // Remove o item da posição original
        const [movedItem] = reorderedFiles.splice(source.index, 1)

        // Insere o item na nova posição
        reorderedFiles.splice(destination.index, 0, movedItem)

        // Atualiza o estado com o array reorganizado
        props.setFiles(reorderedFiles);

    };


    return (
        <div className="row fadeItem mt-3">
            <label for="geralForm" className="form-label fw-bold">Fotos</label>
            <div className="col-12">

                <div className="row">
                    <>

                        <label htmlFor="" className="form-label">Importe as fotos do seu imóvel:</label>


                        <StyledDropzone setFiles={array => { props.setFiles(props.files?.concat(array)); console.log(props.files?.concat(array)); setForceUpdate(forceUpdate + 1) }} img baseStyle multiFiles filesLength={props.files?.length}>
                            <div className="row mt-3 d-flex justify-content-center align-items-center" style={{ height: '100px' }}>
                                <div className="col-12 d-flex justify-content-center align-items-center" >
                                    <span>
                                        <small className="text-center small">
                                            Clique aqui ou arraste as imagens
                                        </small>
                                    </span>
                                </div>
                            </div>
                        </StyledDropzone>
                        {/* <span className="small text-secondary">Máximo de 8 imagens</span> */}
                    </>

                    <DragDropContext onDragEnd={res => handleOrderChange(res)}>
                        <Droppable droppableId="droppable" direction="horizontal">
                            {(provided) => (

                                <div className="col-12 my-2 d-flex align-items-center mb-5" style={{ "overflowX": 'scroll' }} {...provided.droppableProps} ref={provided.innerRef}>

                                    {props.files?.map((elem, index) => (
                                        <Draggable key={'image' + index} draggableId={'image' + index} index={index}>
                                            {(provided) => (
                                                <div className="my-3" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} id={index + 'image'}>
                                                    <div className="col-12 d-flex justify-content-center">
                                                        {index === 0 && (
                                                            <span className="bold">Foto de capa</span>
                                                        )}
                                                    </div>
                                                    <div className="col-12 mx-3 d-flex justify-content-center align-items-top">
                                                        <img src={elem.url ? elem.url : URL.createObjectURL(elem)} alt="logo" id="logoItem" className="fileImgs fadeItem" />
                                                        <button type="button" class="btn-close ms-1" aria-label="Close" onClick={() => { props.setFiles([...props.files?.slice(0, index), ...props.files?.slice(index + 1)]) }}></button>
                                                    </div>
                                                </div>
                                            )
                                            }

                                        </Draggable>

                                    ))}
                                    {provided.placeholder}


                                </div>
                            )}

                        </Droppable>
                    </DragDropContext>

                </div>
            </div>
        </div>
    )
}