import React from "react"


type TaskType = {
    id: number
    title: string
    isDone: boolean
}


type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: Function
}

export function TodoList(props: PropsType) {
    return (
        <div>
            <div>{props.title}</div>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        return <li><input type={"checkbox"} checked={t.isDone} />
                            <span>{t.title}</span>
                            <button onClick={() => { props.removeTask(t.id) }}>x</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}