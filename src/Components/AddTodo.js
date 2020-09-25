import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">

                {/* Add Todo Text Field */}
                <TextField
                    value={props.addTodoInput} 
                    onChange={e=>props.setAddTodoInput(e.target.value)} 
                    id="outlined-basic" 
                    label="Add Todo" 
                    variant="outlined" />

                {/* Add Todo Text Button */}
                <Fab
                    type='submit' 
                    onClick={props.addTodo} 
                    color="primary" 
                    aria-label="add">
                    <AddIcon />
                </Fab>
            </form>
            
        </div>
    )
}

export default AddTodo
