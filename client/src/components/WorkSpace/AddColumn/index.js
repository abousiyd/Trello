import React, {useState} from 'react'
import Column from '../../../services/Column'
import './index.css'


const AddColumn = ({activeDashId, getDashboards}) => {

    const [columnName, setColumnName] = useState('') 

    const handleInputChange = (e) => {
        setColumnName(e.target.value)
    }

    const addNewColumn = async () => {
        await Column.add(columnName, activeDashId)
        getDashboards()
        setColumnName('')
    }


    return (
        <form className='add-column-form' >
            {columnName && <i onClick={addNewColumn} className="fas fa-plus add-column-icon"></i>}
            <input className='add-column-input' onChange={handleInputChange} value={columnName} type='text' placeholder='Nombre columna' />
        </form>
    )

}
export default AddColumn;