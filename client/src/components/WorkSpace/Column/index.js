import React, {useState} from "react"
import Tasks from '../Task/index'
import columnServices from '../../../services/Column'
import './index.css'


const Column = ({column, getDashboards}) => {


    const [showColumn, setShowColumn] = useState(true)
    const [columnName, setcolumnName] = useState(null)
    const [editColumnId, setEditColumnId] = useState(null)

    const handleInputChange = (e) => {
        setcolumnName(e.target.value.trim())
    }

    const deleteColumn = async (id) => {
        await columnServices.deleteColumn(id)
        setShowColumn(false)
    }

    const save = async (id) => {
        if(!columnName) {
            setEditColumnId(null)
            return
        }
        await columnServices.save(id, columnName)
        setEditColumnId(null)
        getDashboards()

    }

    return (

    <>

        {showColumn && <div className='form-container' key={column._id}>

            {
                editColumnId === column._id ? 
                <input className='column-input' onChange={handleInputChange} value={columnName === null ? column.name : columnName} type='text'  placeholder='name' /> 
                    :
                <h3 className='column-title'>{column.name}</h3>

            }
            {
                editColumnId === column._id ? 
                <i onClick={() => save(column._id)} className="far fa-save save-column-icon"></i> :  
                <i onClick={() => setEditColumnId(column._id)} className="fas fa-pen edit-column-icon"></i>
                
            }
            <i onClick={() => deleteColumn(column._id)} className="far fa-trash-alt remove-column-icon"></i>
            
            <Tasks  getDashboards={getDashboards} column={column}/>
            
        </div>}
   
    </>
    )


}
export default Column