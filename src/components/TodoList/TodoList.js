import React, {useState } from 'react'
import Header from './Header'
import Todo from './Todo'

export default function TodoList() {

        const [todos ,setTodos] = useState([]);
        const [todoTitle , setTodoTitle] = useState("")
        const [status , setStatus] = useState('all')
       
        

       
        
   
    const addTodo = (event) => {
       
        event.preventDefault()

        let newTodo = {
            id: todos.length + 1,
            title : todoTitle,
            completed : false
        }
        
        setTodos(preveState => {
            return [...preveState, newTodo]
        })

        setTodoTitle('')
       
       
    }
    const removeTodo = (todoId) => {

      let newTodo = todos.filter(todoItem => {
            return todoItem.id !== todoId
        })

      setTodos(newTodo)
      
    }
  
    const editTodo = (todoID) => {
     let newTOdo = [...todos]
        newTOdo.forEach(todo => {
            if(todoID === todo.id){
                todo.completed = !todo.completed
            }
        })  
        setTodos(newTOdo)
    }
   const todoTitleHandler = (event) => {
        setTodoTitle(event.target.value)
    }
    const statusHandler = (event) => {
       setStatus(event.target.value)
    }
 
        return (
            <>
                <Header />
                <form onSubmit={addTodo}>
                    <input type="text" className="todo-input" value={todoTitle} onChange={todoTitleHandler}  maxLength="40"/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select onChange={statusHandler} name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                    {
                        status === 'completed' && todos.filter(todo => todo.completed).map(todo => (
                            <Todo key={todo.id} {...todo} onRemoveTodo={removeTodo} onEditTodo ={editTodo}/>
                        ))
                    }
                    {
                        status === 'uncompleted' && todos.filter(todo => !todo.completed).map(todo => (
                            <Todo key={todo.id} {...todo} onRemoveTodo={removeTodo} onEditTodo ={editTodo}/>
                        ))
                    }
                    {
                        status === "all" && todos.map(todoItem => (
                            <Todo key={todoItem.id} {...todoItem} onRemoveTodo={removeTodo} onEditTodo ={editTodo}/>
                        ))
                    }
                          
                        
                     
                    </ul>
                </div>
            </>
        )
    
}
