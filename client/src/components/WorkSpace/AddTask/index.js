import React, {useState} from 'react'
import Task from '../../../services/Task'



const AddTask = () => {
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
        
    }

    return (
        <form >
            <input onChange={handleInputChange}  name='title' type='text' placeholder='Title' />
            <input onChange={handleInputChange} name='description' type='text' placeholder='description' />

            <i onClick={addNewTask} className="fas fa-plus "></i>
        </form>
    )
}


export default AddTask;