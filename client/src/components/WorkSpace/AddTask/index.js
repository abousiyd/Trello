import React, {useState} from 'react'
import task from '../../../services/Task'
import Task from '../../../services/Task'
import './index.css'

const AddTask = ({getDashboards, column}) => {

    const [addTask, setAddTask] = useState(false)

    const [taskName, setTaskName] = useState({
        title: '',
        description: ''
    }) 

    const handleInputChange = (e) => {
        setTaskName({
            ...taskName,
            [e.target.name] : e.target.value
        })
    }
    
    const addNewTask = async () => {
        const {title, description} = taskName
        const result = await Task.add(title, description, column._id)

        getDashboards()
        setTaskName({
            title: '',
            description: ''
        })
        setAddTask(true)
        if(result.status === 'success' ) return setAddTask(false)  
    }

    return (
        <form >
            {
                !addTask && <span className="add-task-btn-primary" onClick={() => setAddTask(true)}>
                    <i className="fas fa-plus"></i>
                </span>
            }
            
            {
                addTask && <div className='form-task' >
                    <input 
                        className='title-task' 
                        onChange={handleInputChange} 
                        value={taskName.title ? null : taskName.title} 
                        name='title' type='text' 
                        placeholder='Title...' 
                    /> 
                    
                    <textarea 
                        className='description-task' 
                        onChange={handleInputChange} 
                        value={taskName.description ? null : taskName.description} 
                        name='description' 
                        type='text' 
                        placeholder='description...'
                        rows="2"
                    ></textarea>
                    <span className="add-task-btn-secondary" onClick={addNewTask}>Create</span>
                    
                    <span className="add-task-btn-tertiary" onClick={() => setAddTask(false)}>Close</span>
                
                </div>
        }

            
        
        </form>
    )
}


export default AddTask;