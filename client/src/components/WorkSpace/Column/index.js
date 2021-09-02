
import React, {useState} from "react"
import Tasks from '../Taks/index'

import columnServices from '../../../services/Column'


const Column = ({column}) => {


    const [showColumn, setShowColumn] = useState(true)
    const [columnName, setcolumnName] = useState(null)

    
    const handleInputChange = (e) => {
        setcolumnName(e.target.value.trim())
    }

    const deleteColumn = async (id) => {
        await columnServices.deleteColumn(id)
        setShowColumn(false)

    }


    return (

    <>
        {showColumn && <div key={column._id} className='work_space_column'>
            <input onChange={handleInputChange} value={columnName === null ? column.name : columnName} type='text'  placeholder='name' /> 

            <p  >{column.name}bbb</p>

            <i onClick={() => deleteColumn(column._id)} className="far fa-trash-alt trash-icon"></i>

            <Tasks column={column}/>
            </div>}
    </>
    )


}
export default Column