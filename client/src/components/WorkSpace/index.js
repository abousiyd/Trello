import React, {useEffect, useState} from "react";
import Column from "./Column";
import AddColumn from './AddColumn/index'
import './index.css'
import { DragDropContext, Droppable } from "react-beautiful-dnd";


const WorkSpace = ({activeDash, getDashboards}) => {
    const {name, user, users, columns, _id: activeDashId} = activeDash

    const [newColumns, setColumns] = useState(columns)


    useEffect(() => {
    }, [activeDash])

    useEffect(() => {
        setColumns(columns)
    }, [columns])
  
    const moveElement = (array,initialIndex,finalIndex) => {
        array.splice(finalIndex,0,array.splice(initialIndex,1)[0])
        return array;
    }

    const getcolumnIndex = obj => columns.findIndex(column => column._id ===  obj.droppableId)
    
    const onDragEnd = result => {

        if (!result.destination) return;
        const { source, destination } = result;
        const columnsCopie = [...columns]

        if (source.droppableId !== destination.droppableId) {
            const currentColumnIndex = getcolumnIndex(source)
            const selectedColumnIndex = getcolumnIndex(destination)
            const [removed] = columnsCopie[currentColumnIndex].tasks.splice(source.index, 1);
            columnsCopie[selectedColumnIndex].tasks.splice(destination.index, 0, removed);
        } else {
            const selectedColumnIndex = getcolumnIndex(destination)
            let newTasks = columnsCopie[selectedColumnIndex].tasks
            columnsCopie[selectedColumnIndex].tasks = moveElement(newTasks, source.index, destination.index)
        } 

        setColumns(columnsCopie)

       
      };


    return (
        <>
        <div className="work_space">
            <h2 className='work_space_title'>
                 {name.toUpperCase()}. Nombre de usuario: {user.name.toUpperCase()}
            </h2>

            <h3 className='work_space_subtitle'> todos los participantes </h3>
            {(users || []).map(participante => (
                <p className='work_space_users' key={participante._id}>{participante.name}, {participante.email}</p>
            ))}

        </div>

        <DragDropContext onDragEnd={onDragEnd}>
            <div className='work_space_columns'>
                {(newColumns || []).map(column => (
                    <Droppable droppableId={column._id} key={column._id}>
                        {(provided, snapshot) => {
                            console.log(column._id, 9998, 777)
                            return <div  {...provided.droppableProps} ref={provided.innerRef} key={column._id} className='formColumn'>
                                {<Column  getDashboards={getDashboards} column={column} />}
                            </ div>
                        }}
                    </Droppable>
                ))}
                    <AddColumn getDashboards={getDashboards} activeDashId={activeDashId}  />
            </div>
        </DragDropContext>
        

        </>
    )
}

export default WorkSpace;