import React from 'react';
import './App.css';

// Components
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo'

// State Management

function App() {
  return (
    <div className="App">
      {/* Name of Application and Menu */}
      <Header />

      {/* List of Todos */}
      <TodoList /> 

      {/* Input Modal */}
      <AddTodo />
    </div>
  );
}

export default App;
