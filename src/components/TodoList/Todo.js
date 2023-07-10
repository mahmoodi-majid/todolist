import React, {} from 'react'

export default function Todo (props) {
    const removeTOdo = (id) => {
        props.onRemoveTodo(id)
    }
     const editTodo =(id) =>{
        props.onEditTodo(id)
    }
        return (
            // 'completed' class for completed todos
            <div className={`todo ${props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{props.title}</li>

                <button className="check-btn" onClick={ () => {editTodo(props.id)}}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={() => {removeTOdo(props.id)}}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
   
}