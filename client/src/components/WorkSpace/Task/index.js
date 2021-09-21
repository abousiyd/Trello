import React, {useState} from "react"
import { Draggable } from "react-beautiful-dnd";
import AddTask from "../AddTask/index"
import taskServices from '../../../services/Task'
import './index.css'

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
    return (
        <div>
            {(tasks || []).map((task, index) => {
                return <Draggable  key={task._id} draggableId={task._id} index={index}>
                    {(provided, snapshot) => {
                        return <div className='task-list' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        {
                            editTaskId === task._id ?
                            <>
                                <input className='task-input-title' onChange={handleInputChange} value={taskName === null ? task.title : taskName} type='text'  placeholder='name' /> 
                                <input className='task-input-title-descripcion' onChange={handleInputChangeDes} value={taskDescripcion === null ? task.title : taskDescripcion} type='text'  placeholder='name' /> 
                            </>
                            :
                                <div className='task-list-items'>
                                    <h3 className='task-list-title'>{task.title}</h3>
                                </div>
                        }
                        {
                            editTaskId === task._id ?
                            <i onClick={() => save(task._id)} className="far fa-save save-task-icon"></i> :  
                            <i onClick={() => setEditTaskId(task._id)} className="fas fa-pen edite-task-icon"></i>
                        }
                        <i onClick={() => deleteTask(task._id)} className="far fa-trash-alt remove-task-icon"></i>
                    </div>
                    }}
                </Draggable>
            })}

            <AddTask getDashboards={getDashboards} column={column} />
        </div>
    )
}

export default Tasks;