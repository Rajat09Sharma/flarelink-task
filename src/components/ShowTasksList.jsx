import Task from "./Task"


export default function ShowTasksList({ tasksList }) {
    return (
        <>
            <div className="w-75 mx-auto my-5">
                {tasksList.map((task) => {
                    console.log(task)
                    return (
                        <Task key={task.id} title={task.taskName} id={task.id} isCompleted={task.completed} piority={task.piority} />
                    )
                })}
            </div>
        </>
    )
}
