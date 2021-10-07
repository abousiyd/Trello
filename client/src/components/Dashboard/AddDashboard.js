import React, { useState } from 'react'
import Dashboard from '../../services/Dashboard'
import './css/AddDashboard.css'


const AddDasboard = ({getDashboards}) => {
    const [dashName, setDashName] = useState('')

    const handleInputChange = (e) => {
        setDashName(e.target.value.trim())
    }

    const addNewDash = async () => {
        await Dashboard.add(dashName)
        getDashboards()
        setDashName('')
    }

    return (
        <form className='add-dash-form'>
            <input className='add-dash-input' onChange={handleInputChange} value={dashName} type='text' placeholder='name' />
            {
               dashName && <i onClick={addNewDash} className="fas fa-plus add-dash-icon"></i>
            }
        </form>
    )

}
export default AddDasboard;