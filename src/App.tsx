import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { v1 } from "uuid";

type TodolistType = {
  id: string;
  title: string;
};

function App() {
  function removeTask(id: string, todoListId: string) {
    let task = tasks[todoListId];
    let filteredTasks = task.filter((t) => t.id !== id);
    tasks[todoListId] = filteredTasks;
    setTasks({ ...tasks });
  }

  function addTask(title: string, todoListId: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let task = tasks[todoListId];
    let newTasks = [newTask, ...task];
    tasks[todoListId] = newTasks;
    setTasks({ ...tasks });
  }

  function ChangeStatus(taskId: string, isDone: boolean, todoListId: string) {
    let t = tasks[todoListId];
    let task = t.find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks({ ...tasks });
  }

  let [TodoLists, setTodoLists] = useState<Array<TodolistType>>([
    { id: v1(), title: "What to learn" },
    { id: v1(), title: "What to do" },
    { id: v1(), title: "What to do" },
  ]);

  let todoListID1 = v1();
  let todoListID2 = v1();

  let [tasks, setTasks] = useState({
    [todoListID1]: [
      { id: v1(), title: "React", isDone: true },
      { id: v1(), title: "React", isDone: true },
      { id: v1(), title: "React", isDone: false },
    ],
    [todoListID2]: [
      { id: v1(), title: "Vue", isDone: true },
      { id: v1(), title: "React", isDone: false },
      { id: v1(), title: "React", isDone: true },
    ],
  });

  return (
    <div className="App">
      {TodoLists.map((tl) => {
        let tasksForTodoList = tasks;

        return (
          <TodoList
            key={tl.title}
            title={tl.title}
            tasks={tasksForTodoList}
            removeTask={removeTask}
            addTask={addTask}
            changeTaskStatus={ChangeStatus}
          />
        );
      })}
    </div>
  );
}

export default App;
