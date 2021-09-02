import React, {useState} from "react";
import Columns from "./Columns";
import AddColumn from './AddColumn/index'
import './index.css'
// import Column from '../../services/Column'


const WorkSpace = ({activeDash}) => {



    

    
  
    
    const {name, user, users, columns} = activeDash
    


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

        <AddColumn   />
        {/* {(column || [].map(item => {
            <p>{item}</p>
        }))} */}

        <div className='work_space_columns'>
            {(columns || []).map(column => (

                <Columns key={column._id} column={column} />

            ))}
        </div>

        </>
    )
}

export default WorkSpace;