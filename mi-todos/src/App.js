import React, {useState, useEffect} from 'react';
import './App.css';
import db from './firebase'


// Components
import Header from './Components/Header'
import TodoList from './Components/TodoList'
import AddTodo from './Components/AddTodo'


function App() {

  // State
  const [todos, setTodos]= useState([])
  const [addTodoInput, setAddTodoInput] = useState('')

  // Fetch Todos from database on app load
  useEffect(() => {
    //  Loads when the app fires
    db.collection('todos').onSnapshot(snap=>{
      setTodos(snap.docs.map(doc=>doc.data().todo))
    })
  }, [])

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
