import React, {useState} from "react"
import AddTask from "../AddTask/index"
import taskServices from '../../../services/Task'
import './index.css'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Tasks = ({column, getDashboards }) => {
    
    const [editTaskId, setEditTaskId] = useState(null)
    const [taskName, setTaskName] = useState(null)
    const [taskDescripcion, setTaskDescripcion] = useState(null)

    const handleInputChange = (e) => {
        setTaskName(e.target.value)
    }
    const handleInputChangeDes = (e) => {
        setTaskDescripcion(e.target.value)
    }

    const deleteTask = async (id) => {
        await taskServices.deleteTask(id)
        getDashboards()
    }

    const save = async (id) => {
        if(!taskName || !taskDescripcion) {
            setEditTaskId(null)
            return
        }
        await taskServices.save(id, taskName, taskDescripcion)
        setEditTaskId(null)
        getDashboards()
    }
    
    const {tasks } = column
    console.log(tasks, 2211)
    return (
        <DragDropContext onDragEnd={(result) => console.log(result)}>
        <div className='taskList'>
            <Droppable droppableId="tasks">
            {(droppableProvieded) => (tasks || []).map((task, index) => {
                return <div {...droppableProvieded.droppableProps} ref={droppableProvieded.innerRef} className='taskList_container'  key={task._id}>
                    {
                        editTaskId === task._id ?
                        <>
                            <input className='' onChange={handleInputChange} value={taskName === null ? task.title : taskName} type='text'  placeholder='name' /> 
                            <input className='' onChange={handleInputChangeDes} value={taskDescripcion === null ? task.title : taskDescripcion} type='text'  placeholder='name' /> 
                        </>
                        :
                        <Draggable draggableId={task._id}  index={index} >
                            {(draggableProvided) => <div className='taskList_box'>
                                    <p {...draggableProvided.dragHandleProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps} className='taskList_title'>{task.title}</p>
                                {/* {droppableProvieded.placeholder} 
                                dejar espacio al haver drag and drop */}
                            </div>}
                        </Draggable>
                    }
                    {
                        editTaskId === task._id ?
                        <i onClick={() => save(task._id)} className="far fa-save"></i> :  
                        <i onClick={() => setEditTaskId(task._id)} className="fas fa-pen taskEdit_Icon"></i>
                    }

                    <i onClick={() => deleteTask(task._id)} className="far fa-trash-alt taskDelete_Icon"></i>
                    {droppableProvieded.placeholder} 
                    {/* dejar espacio al haver drag and drop */}
                </div>
            })}
            </Droppable>

            <AddTask getDashboards={getDashboards} column={column} />
        </div>
        </DragDropContext>
    )
}

export default Tasks;
