import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import db from '../firebase';
import EditTodo from './EditTodo'

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

  return (
    <div>
          <List  style={{
      display: 'flex',
      width: 1300,
      flexDirection: "row",
      margin: 10,
      borderRadius: 10,
      backgroundColor: 'white',
      // boxShadow: "3px 3px 3px 3px #BEBEBE",
      alignItems: 'center',}}>
              <ListItem>
                  <ListItemText primary='todo' secondary={props.todo.todo}/>
              </ListItem>
              <DeleteForeverIcon onClick={()=> db.collection('todos').doc(props.todo.id).delete()}/>
              <EditTodo todo={props.todo}/>
          </List>
    </div>
  );
}
