import React from "react"


const Tasks = ({column}) => {

    const {tasks } = column

    return (
        <>
        <div>
            {(tasks || []).map(task => {
                return <p>{task.title}</p>
            })}
        </div>
        </>
    )
}

export default Tasks;
