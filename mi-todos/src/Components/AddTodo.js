import React from 'react'

function AddTodo(props) {
    return (
        <div>
            <form>
                <input value={props.addTodoInput} onChange={e=>props.setAddTodoInput(e.target.value)}></input>
                <button type='submit' onClick={props.addTodo}>Add Todo Button</button>
            </form>
            
        </div>
    )
}

export default AddTodo
