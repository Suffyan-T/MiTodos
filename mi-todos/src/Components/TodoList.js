import React from 'react'

import Todo from './Todo'

function TodoList(props) {
    return (
        <div className="TodoList">
            <ul>
                {props.todos.map(todo=> <Todo todo={todo}/>)}
            </ul>
        </div>
    )
}

export default TodoList
