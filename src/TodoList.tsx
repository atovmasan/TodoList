import { title } from "process";
import React, { KeyboardEvent, ChangeEvent, useState } from "react";

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  key: string;
  title: string;
  tasks: Array<TaskType>;
  removeTask: Function;
  addTask: Function;
  changeTaskStatus: Function;
};

export function TodoList(props: PropsType) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  let [error, setError] = useState<string | null>(null);

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
      if (newTaskTitle.trim() === "") {
        setError("field is required");
        return;
      }
      props.addTask(newTaskTitle);
      setError(null);
      setNewTaskTitle("");
    }
  };

  const addTask = () => {
    if (newTaskTitle.trim() === "") {
      setError("field is required");
      return;
    }
    props.addTask(newTaskTitle);
    setError(null);
    setNewTaskTitle("");
  };

  return (
    <div>
      <div>{props.title}</div>
      <div>
        <input
          className={error ? "error" : ""}
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyPress={onKeyPressHandler}
        />
        <button onClick={addTask}>+</button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <ul>
        {props.tasks.map((t) => {
          const onClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id);
          };

          return (
            <li key={t.id}>
              <input
                type={"checkbox"}
                checked={t.isDone}
                onChange={onClickHandler}
              />
              <span>{t.title}</span>
              <button
                onClick={() => {
                  props.removeTask(t.id);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
}
