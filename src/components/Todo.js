import React from 'react';
import TodoList from './TodoList';



const Todo =({text ,todos, setTodos, todo}) =>{

    const deleteTodo = ()=>{
        setTodos(todos.filter((item) => item.id !== todo.id));
        // console.log(todo);
    }

    const completedTodo =() =>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item,completed:!item.completed
                };
            }
            return item;
        }
        ))
    }
    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="completed-todo" onClick={completedTodo}><i className="fas fa-check"></i></button>
            <button className="delete-todo" onClick={deleteTodo}><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;