import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import React, { useState } from 'react';
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditTodo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [editTodo, setEditTodo] = useState('')

  //Modal Open Functionality   
  const handleOpen = () => {
    setOpen(true);
  };


  // Edit Todo Button Functionality
  const editTodoButton =e=>{
    e.preventDefault()
    db.collection('todos').doc(props.todo.id).update({ id: props.todo.id , todo:editTodo})
    setEditTodo('')
    setOpen(false)
    }


    // Keypress Functionality for Text field- to close modal when enter is pressed
    const keyPress=e=>{
        if(e.keyCode == 13){
            setOpen(false)
        }
    }

  return (
    <div>
        
      <button type="button" onClick={handleOpen}>
        <EditRoundedIcon color='secondary'/>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={()=>setOpen(false)}S
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <form>
              <TextField
                  value={editTodo}
                  placeholder={props.todo.todo}
                  inputRef={input => input && input.focus()} 
                  onChange={e=>setEditTodo(e.target.value)} 
                  onKeyPress={keyPress}
                  id="outlined-basic" 
                  label="Add Todo" 
                  variant="outlined" />
              <button 
                type='submit' 
                onClick={editTodoButton}>edit</button>
              </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
