import React from "react"
import task from "../../../services/Task"
import AddTask from "../AddTask/index"


const Tasks = ({column, getDashboards }) => {


    const {tasks } = column
    return (
        <>
        <div>
            {(tasks || []).map(task => {
                return <p>{task.title}</p>
            })}

            <AddTask getDashboards={getDashboards} />
        </div>
        </>
    )
}

export default Tasks;
