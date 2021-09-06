import React from "react"
import AddTask from "../AddTask/index"


const Tasks = ({column}) => {

    const {tasks } = column

    return (
        <>
        <div>
            {(tasks || []).map(task => {
                return <p>{task.title}</p>
            })}

            <AddTask />
        </div>
        </>
    )
}

export default Tasks;
