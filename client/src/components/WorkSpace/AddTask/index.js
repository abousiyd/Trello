import React, {useState} from 'react'
import task from '../../../services/Task'
import Task from '../../../services/Task'
import './index.css'

const AddTask = ({getDashboards, column}) => {

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
        await Task.add(title, description, column._id)
        getDashboards()
        setTaskName({
            title: '',
            description: ''
        })
    }

    return (
        <form className='formTask' >
            <input className='titleTask' onChange={handleInputChange} value={taskName.title ? null : taskName.title} name='title' type='text' placeholder='Title' />
            <input className='descriptionTask' onChange={handleInputChange} value={taskName.description ? null : taskName.description} name='description' type='text' placeholder='description' />
            <i onClick={addNewTask} className="fas fa-plus "></i>
        </form>
    )
}


export default AddTask;