import React from "react";

const WorkSpace = ({activeDash}) => {
    const {name, user, users, columns} = activeDash

    return (
        <div className="work_space">
            <h1> soy {name}, creado por {user.name}</h1>
            <h1> todos los participantes </h1>
            {(users || []).map(participante => (
                <p key={participante._id}>{participante.name}, {participante.email}</p>
            ))}



            {(columns || []).map(column => (
                <div>

                    <p key={column._id}>{column.name}</p>
                    
                </div>
            ))}
        </div>
    )
}

export default WorkSpace;