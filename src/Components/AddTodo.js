import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import firebase from 'firebase'


// Material UI Styling
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


function AddTodo(props) {

  const classes = useStyles();

  const [addTodoInput, setAddTodoInput] = useState('')

  // Add Todo Button Functionality
  const addTodo =e=>{
      // Prevents app from reloading on each button press
      e.preventDefault()
      // Adds given todo to Firebase Database
      db.collection('todos').add({
        todo: addTodoInput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      // Clears the state of addTodoInput 
      setAddTodoInput('')
  }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">

                {/* Add Todo Text Field */}
                <TextField
                    value={addTodoInput} 
                    onChange={e=>setAddTodoInput(e.target.value)} 
                    id="outlined-basic" 
                    label="Add Todo" 
                    variant="outlined" />

                {/* Add Todo Text Button */}
                <Fab
                    type='submit' 
                    onClick={addTodo} 
                    color="primary" 
                    aria-label="add">
                    <AddIcon />
                </Fab>
            </form>
            
        </div>
    )
}

export default AddTodo
