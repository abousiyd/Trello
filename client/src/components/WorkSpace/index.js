import React, {useEffect} from "react";
import Column from "./Column";
import AddColumn from './AddColumn/index'
import './index.css'
// import Column from '../../services/Column'


const WorkSpace = ({activeDash, getDashboards}) => {

    useEffect(() => {
    }, [activeDash])
  
    
    const {name, user, users, columns, _id: activeDashId} = activeDash
    

    return (
        <>
        
        <div className="work_space">
            <h2 className='work_space_title'>
                 {name.toUpperCase()}. Nombre de usuario: {user.name.toUpperCase()}
            </h2>

            <h3 className='work_space_subtitle'> todos los participantes </h3>
            {(users || []).map(participante => (
                <p className='work_space_users' key={participante._id}>{participante.name}, {participante.email}</p>
            ))}

        </div>


        <div className='work_space_columns'>
            {(columns || []).map(column => (
                
                <>
                    {column && <Column  getDashboards={getDashboards} column={column} key={column._id}  />}
                </>

            ))}
                <AddColumn getDashboards={getDashboards} activeDashId={activeDashId}  />
        </div>

        </>
    )
}

export default WorkSpace;