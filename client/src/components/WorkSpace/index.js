import React from "react";

const WorkSpace = ({activeDash}) => {
    const {name, user, users} = activeDash

    return (
        <div className="work_space">
            <h1> soy {name}, creado por {user.name}</h1>
            <h1> todos los participantes </h1>
            {(users || []).map(participante => (
                <p key={participante._id}>{participante.name}, {participante.email}</p>
            ))}
        </div>
    )
}

export default WorkSpace;