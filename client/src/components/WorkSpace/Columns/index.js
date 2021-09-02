
import React, {useState, useEffect} from "react"

import Column from '../../../services/Column'


const Columns = ({column}) => {

    const [showColumn, setShowColumn] = useState(true)
    const [columnName, setcolumnName] = useState(null)

    
    const handleInputChange = (e) => {
        setcolumnName(e.target.value.trim())
    }

    const deleteColumn = async (id) => {
        await Column.deleteColumn(id)
        setShowColumn(false)
    }

    return (

    <>
        {showColumn && <div key={column._id} className='work_space_column'>
            <input onChange={handleInputChange} value={columnName === null ? column.name : columnName} type='text'  placeholder='name' /> 

            <p  >{column.name}bbb</p>

            <i onClick={() => deleteColumn(column._id)} className="far fa-trash-alt trash-icon"></i>

            </div>}
    </>
    )


}
export default Columns