import React from 'react'
import Todo from './Todo'


function TodoList(props) {

    return (
        <div 
        className="TodoList" 
        style={{display: 'flex',
        flexDirection: "column",
        alignItems: 'center',}}>
                {props.todos.map(todo=> <Todo todo={todo} editTodo={props.editTodo} setEditTodo={props.setEditTodo}/>)}
        </div>
    )
}

export default TodoList
