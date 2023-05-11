import React from 'react'

const Todo = () => {
    return (
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p>({todo.category})</p>
            </div>
            <div className="button">
                <button>Completar</button>
                <button>x</button>
            </div>
        </div>
    )
}

export default Todo