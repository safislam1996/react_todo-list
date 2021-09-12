
import React,{useState} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
 const [inputText,setInputState]=useState("");
 const [todos,setTodos]=useState([]);
  return (
    <div className="App">
      <h1>React App</h1>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputState={setInputState}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
