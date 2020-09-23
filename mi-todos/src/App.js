import React, {useState} from 'react';
import './App.css';

// Components
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo'


function App() {

  // State
  const [todos, setTodos]= useState(['Todo 1','Todo 2'])
  const [addTodoInput, setAddTodoInput] = useState('')

  // Add Todo Button Functionality
  const addTodo =e=>{
    e.preventDefault()
     setTodos([...todos, addTodoInput])
     setAddTodoInput('')
  }


  return (
    <div className="App">
      {/* Name of Application and Menu */}
      <Header />

      {/* List of Todos */}
      <TodoList todos={todos}/> 

      {/* Input Modal */}
      <AddTodo addTodoInput={addTodoInput} setAddTodoInput={setAddTodoInput} addTodo={addTodo}  />
    </div>
  );
}

export default App;
