import React, {useState} from 'react'
import Task from '../../../services/Task'
import './index.css'

const AddTask = ({getDashboards}) => {
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
        await Task.add(title, description)

        getDashboards()
        
    }

    return (
        <form className='formTask' >
            <input className='titleTask' onChange={handleInputChange}  name='title' type='text' placeholder='Title' />
            <input className='descriptionTask' onChange={handleInputChange} name='description' type='text' placeholder='description' />

            <i onClick={addNewTask} className="fas fa-plus "></i>
        </form>
    )
}


export default AddTask;