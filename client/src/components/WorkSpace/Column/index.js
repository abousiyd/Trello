
import React, {useState} from "react"
import Tasks from '../Task/index'
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
        <div>

            {showColumn && <div key={column._id} className='work_space_column'>

                <input onChange={handleInputChange} value={columnName === null ? column.name : columnName} type='text'  placeholder='name' /> 

                <p>{column.name}</p>

                <i onClick={() => deleteColumn(column._id)} className="far fa-trash-alt trash-icon"></i>
                
            </div>}
                <Tasks column={column}/>
        </div>
    </>
    )


}
export default Column