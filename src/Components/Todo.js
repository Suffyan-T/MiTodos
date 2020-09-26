import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import React from 'react';
import db from '../firebase';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    width: '80%',
    backgroundColor: theme.palette.background.paper,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function Todo(props) {
  const classes = useStyles();
  console.log(db.collection('todos').doc(props.todo.id))

  // Edit Todo Button Functionality
    const editTodoButton =e=>{
      // Prevents app from reloading on each button press
      e.preventDefault()

      // Adds given todo to Firebase Database
      db.collection('todos').doc(props.todo.id).update({ id: props.todo.id , todo:props.editTodo})

      // Clears the state of addTodoInput 
      props.setEditTodo('')
    }

  return (
    <div>
            <List>
                <ListItem>
                    <ListItemText primary='todo' secondary={props.todo.todo}/>
                </ListItem>
                <DeleteForeverIcon onClick={()=> db.collection('todos').doc(props.todo.id).delete()}/>
                <EditRoundedIcon/>
                <form>
                <TextField
                    value={props.editTodo} 
                    onChange={e=>props.setEditTodo(e.target.value)} 
                    id="outlined-basic" 
                    label="Add Todo" 
                    variant="outlined" />
                <button 
                  type='submit' 
                  onClick={editTodoButton} >edit</button>
                </form>
                
            </List>
    </div>
  );
}
