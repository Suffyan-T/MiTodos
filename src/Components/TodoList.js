import React from 'react'
import Todo from './Todo'


function TodoList(props) {

    return (
        <div 
        className="TodoList" 
        style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',}}>
                {props.todos.map(todo=> <Todo todo={todo}/>)}
        </div>
    )
}

export default TodoList
