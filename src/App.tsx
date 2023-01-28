import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './TodoList';

function App() {

  let tasks1 = [
    { id: 1, title: "TS", isDone: false },
    { id: 2, title: "ReduxToolkit", isDone: false },
    { id: 3, title: "JS", isDone: true }
  ]


  let tasks2 = [
    { id: 1, title: "Chemistry", isDone: false },
    { id: 2, title: "Math", isDone: false },
    { id: 3, title: "011001", isDone: true }
  ]

  let tasks3 = [
    { id: 1, title: "C++", isDone: false },
    { id: 2, title: "Redux", isDone: true },
    { id: 3, title: "CSS", isDone: true }
  ]

  return (
    <div className="App">
      <TodoList title="What to learn" tasks={tasks1} />
      <TodoList title="What to do" tasks={tasks2} />
      <TodoList title="What to watch" tasks={tasks3} />
    </div>
  );
}


export default App;
