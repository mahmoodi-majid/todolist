import React, { Component } from 'react'

export default class Todo extends Component {
    removeTOdo(id){
        this.props.onRemoveTodo(id)
    }
    editTodo(id){
        this.props.onEditTodo(id)
    }

    render() {
        return (
            // 'completed' class for completed todos
            <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.todoTitle}</li>

                <button className="check-btn" onClick={this.editTodo.bind(this , this.props.id)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.removeTOdo.bind(this , this.props.id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}