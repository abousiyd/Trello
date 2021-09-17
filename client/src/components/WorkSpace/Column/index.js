
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
        <div className='formColumn'>

            {showColumn && <div className='formColumn_body' key={column._id} className='work_space_column'>

                {
                    editColumnId === column._id ? 
                <input className='formColumn_input' onChange={handleInputChange} value={columnName === null ? column.name : columnName} type='text'  placeholder='name' /> 
                    :
                <p className='formColumn_title'>{column.name}</p>

                }
                {
                    editColumnId === column._id ? 
                    <i onClick={() => save(column._id)} className="far fa-save save-icon"></i> :  
                    <i onClick={() => setEditColumnId(column._id)} className="fas fa-pen editColumn_icon"></i>
                    
                }

                <i onClick={() => deleteColumn(column._id)} className="far fa-trash-alt deleteColumn-icon"></i>
                
                <Tasks  getDashboards={getDashboards} column={column}/>
                
            </div>}
        </div>
    </>
    )


}
export default Column