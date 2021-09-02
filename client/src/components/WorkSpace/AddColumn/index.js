import React, {useState} from 'react'
import Column from '../../../services/Column'

import './index.css'


const AddColumn = ({getColumns }) => {
    // console.log(getColumns , 888)

    const [columnName, setColumnName] = useState('') 

    const handleInputChange = (e) => {
        setColumnName(e.target.value)
    }

    const addNewColumn = async () => {
        await Column.add(columnName)
        
    }


    return (
        <form >
            <input  onChange={handleInputChange} value={columnName}  type='text' placeholder='Nombre columna' />
            <i onClick={addNewColumn} className="fas fa-plus "></i>
        </form>
    )

}
export default AddColumn;