import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";
import { v1 } from "uuid";

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

  return (
    <div className="App">
      <TodoList
        title="What to learn"
        tasks={tasks}
        removeTask={removeTask}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
