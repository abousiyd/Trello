import React, { useState } from 'react'
import Dashboard from '../../services/Dashboard'


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
        <form>
            <input onChange={handleInputChange} value={dashName} type='text' placeholder='name' />
            {
               dashName && <i onClick={addNewDash} className="fas fa-plus"></i>
            }
        </form>
    )

}
export default AddDasboard;