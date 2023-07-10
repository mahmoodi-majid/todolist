import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo   = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this,)
        this.statusHandler = this.statusHandler.bind(this) 
        
    }
    addTodo(event){
        event.preventDefault()

        let newTodo = {
            id: this.state.todos.length + 1,
            todoTitle : this.state.todoTitle,
            completed : false

        }
        this.setState(prevState => {
            return {
                todos : [...prevState.todos , newTodo] ,
                todoTitle : ''
            }
        })
       
    }
    removeTodo(todoId){
      let newTodo = this.state.todos.filter(todoItem => {
            return todoItem.id !== todoId
        })
      this.setState({
        todos : newTodo
      })
    }
  
    editTodo(todoID){
     let newTOdo = [...this.state.todos]
        newTOdo.forEach(todo => {
            if(todoID === todo.id){
                todo.completed = !todo.completed
            }
        })  
        this.setState({
            todos : newTOdo
        })
    }
    todoTitleHandler(event){
        this.setState({
            todoTitle : event.target.value
        })
    }
    statusHandler(event){
       this.setState({
         status : event.target.value
       })
    }
 

    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.addTodo}>
                    <input type="text" className="todo-input" value={this.state.todoTitle} onChange={this.todoTitleHandler}  maxLength="40"/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select onChange={this.statusHandler} name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                    {
                        this.state.status === 'completed' && this.state.todos.filter(todo => todo.completed).map(todo => (
                            <Todo key={todo.id} {...todo} onRemoveTodo={this.removeTodo} onEditTodo ={this.editTodo}/>
                        ))
                    }
                    {
                        this.state.status === 'uncompleted' && this.state.todos.filter(todo => !todo.completed).map(todo => (
                            <Todo key={todo.id} {...todo} onRemoveTodo={this.removeTodo} onEditTodo ={this.editTodo}/>
                        ))
                    }
                    {
                        this.state.status === "all" && this.state.todos.map(todoItem => (
                            <Todo key={todoItem.id} {...todoItem} onRemoveTodo={this.removeTodo} onEditTodo ={this.editTodo}/>
                        ))
                    }
                          
                        
                     
                    </ul>
                </div>
            </>
        )
    }
}
