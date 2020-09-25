import React, {useState, useEffect} from 'react';
import './App.css';
import db from './firebase'
import firebase from 'firebase'

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
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snap=>{
      setTodos(snap.docs.map(doc=>({ id: doc.id , todo:doc.data().todo})))
    })
  }, [])

  // Add Todo Button Functionality
  const addTodo =e=>{
    
    // Prevents app from reloading on each button press
    e.preventDefault()

    // Adds given todo to Firebase Database
    db.collection('todos').add({
      todo: addTodoInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // Adds addTodoInput to the end of todos array
    // setTodos([...todos, addTodoInput])

    // Clears the state of addTodoInput 
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
