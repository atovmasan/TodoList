import React, { KeyboardEvent, ChangeEvent, useState } from "react"


type TaskType = {
    id: string
    title: string
    isDone: boolean
}


type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: Function
    addTask: Function
}




export function TodoList(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("")

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle);
            setNewTaskTitle("")
        }
    }

    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle("")
    }

    return (
        <div>
            <div>{props.title}</div>
            <div>
                <input value={newTaskTitle} onChange={onNewTitleChangeHandler}
                    onKeyPress={onKeyPressHandler} />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        return <li key={t.id}><input type={"checkbox"} checked={t.isDone} />
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