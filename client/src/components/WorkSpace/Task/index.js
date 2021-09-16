import React, {useState} from "react"
import AddTask from "../AddTask/index"
import taskServices from '../../../services/Task'



const Tasks = ({column, getDashboards }) => {
    
    const [editTaskId, setEditTaskId] = useState(null)
    const [taskName, setTaskName] = useState(null)
    const [taskDescripcion, setTaskDescripcion] = useState(null)
console.log(taskName, taskDescripcion)

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
            {(tasks || []).map(task => {
                return <div>
                    {
                        editTaskId === task._id ?
                        <>
                            <input className='formColumn_input' onChange={handleInputChange} value={taskName === null ? task.title : taskName} type='text'  placeholder='name' /> 
                            <input className='formColumn_input' onChange={handleInputChangeDes} value={taskDescripcion === null ? task.title : taskDescripcion} type='text'  placeholder='name' /> 
                        </>
                        :
                        <p>{task.title}</p>
                    }
                    {
                        editTaskId === task._id ?
                        <i onClick={() => save(task._id)} className="far fa-save"></i> :  
                        <i onClick={() => setEditTaskId(task._id)} className="fas fa-pen "></i>
                    }

                    <i onClick={() => deleteTask(task._id)} className="far fa-trash-alt"></i>
                </div>
            })}
            <AddTask getDashboards={getDashboards} column={column} />
        </div>
    )
}

export default Tasks;
