import React, {useEffect, useState} from "react";
import Column from "./Column";
import AddColumn from './AddColumn/index'
import Search from './Search/index'
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
        <div className="main">

            <div className="main-user">
                <h2 className="main-user-text">Tablero creado por: {user.name.toUpperCase()} </h2>
                <span className='main-nav'>
                    <img className='main-nav-user' src={`http://joeschmoe.io/api/v1/${user.name}`} title={user.name}/>
                </span>

            </div>

            <div  className="main-people">
                {(users || []).map(participante => (<div key={participante._id}> 
                    <img className='main-img' 
                        src={`http://joeschmoe.io/api/v1/${participante.name}`}
                        title={participante.name}
                    />
                </div>
                ))}
            </div>
            <Search activeDashId={activeDashId}  participantes={users} getDashboards={getDashboards}/>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
            <div className='work_space_columns'>
                {(newColumns || []).map(column => (
                    <Droppable droppableId={column._id} key={column._id}>
                        {(provided, snapshot) => {
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