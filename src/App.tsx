import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { v1 } from "uuid";

type TodolistType = {
  id: string;
  title: string;
};

function App() {
  let initTasks = [
    { id: v1(), title: "TS", isDone: false },
    { id: v1(), title: "ReduxToolkit", isDone: false },
    { id: v1(), title: "JS", isDone: true },
  ];

  let arr = useState(initTasks);

  let tasks = arr[0];
  let setTasks = arr[1];

  function removeTask(id: string) {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  function addTask(title: string) {
    let newTask = { id: v1(), title: title, isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function ChangeStatus(taskId: string, isDone: boolean) {
    let task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }
    setTasks([...tasks]);
  }

  let [TodoLists, setTodoLists] = useState<Array<TodolistType>>([
    { id: v1(), title: "What to learn" },
    { id: v1(), title: "What to do" },
    { id: v1(), title: "What to do" },
  ]);

  let todoListID1 = v1();
  let todoListID2 = v1();

  let [allTasks, setAllTasks] = useState({
    [todoListID1]: [
      {
        id: v1(),
        title: "Bla-bla-bla",
        isDone: true,
      },
    ],
    [todoListID2]: [
      {
        id: v1(),
        title: "Bla-bla-bla",
        isDone: true,
      },
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
