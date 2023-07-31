// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to add a new ToDo item
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(), // Unique ID for each ToDo item
        text: inputValue,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue('');
    }
  };

  // Function to remove a ToDo item
  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>My To-Do List App</h1>
      </header>
      <main>
        <div className="task-list">
          <h2>Tasks</h2>
          <form id="new-task-form">
            <input
              id="new-task-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your todo list description..."
            />
            <button id="new-task-submit" type="button" onClick={handleAddTodo}>
              Add Task
            </button>
          </form>
          <div id="tasks">
            {todos.map((todo) => (
              <div key={todo.id} className="task">
                <div className="content">
                  <span className="text">{todo.text}</span>
                </div>
                <div className="actions">
                  <button className="delete" onClick={() => handleRemoveTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
