import React from "react"

const Form =({setInputState,todos,setTodos,inputText}) =>
    
     {
        const inputHandler=(e)=>{
            // console.log(e.target.value);
            setInputState(e.target.value);
        }
        const submitTodoHandler =(e)=>{
            e.preventDefault();
            setTodos([
                ...todos,{text:inputText,completed:false,id:Math.random() * 1000}
            ]);
        setInputState("");
        }
       return ( <form>
            <label>Take Input</label>
            <input value={inputText}onChange={inputHandler} type="text" className="input"></input>
            <button className="todo-button" onClick={submitTodoHandler} type="submit" ></button>
        </form>
       )
     }

export default Form;
    