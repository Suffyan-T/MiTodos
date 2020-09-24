import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

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
    <div className={classes.root}>
            <List>
                <ListItem>
                    <ListItemText primary='todo' secondary={props.todo}/>
                </ListItem>
            </List>
    </div>
  );
}
