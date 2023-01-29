import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

function App() {

  let initTasks = [
    { id: 1, title: "TS", isDone: false },
    { id: 2, title: "ReduxToolkit", isDone: false },
    { id: 3, title: "JS", isDone: true }
  ]

  let arr = useState(initTasks)

  let tasks = arr[0]
  let setTasks = arr[1]

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(t => t.id !== id
    )
    setTasks(filteredTasks)
  }

  return (
    <div className="App">
      <TodoList title="What to learn" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}


export default App;
