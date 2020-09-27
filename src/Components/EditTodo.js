import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import db from '../firebase';
import TextField from '@material-ui/core/TextField';

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// Edit Todo Button Functionality
const editTodoButton =e=>{
    e.preventDefault()
    db.collection('todos').doc(props.todo.id).update({ id: props.todo.id , todo:editTodo})
    setEditTodo('')
    }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        <EditRoundedIcon/>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
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
                  onChange={e=>setEditTodo(e.target.value)} 
                  id="outlined-basic" 
                  label="Add Todo" 
                  variant="outlined" />
              <button 
                type='submit' 
                onClick={editTodoButton} >edit</button>
              </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
