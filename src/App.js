import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form.js";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) =>
    setTodos(
      todos.map((todo, k) =>
        k === i ? { ...todo, complete: !todo.complete } : todo
      )
    );

  return (
    <div className="App">
      <Form
        onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : "",
              backgroundColor: complete ? "red" : "",
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
      <br></br>
      {/* {text.map((text, index) => (
        <div key={index}>{text}</div>
      ))} */}
      {/* <h6>Yapilanlar </h6>  complete olanları üstü çizilenleri otomatik olarak gelmesini sağlayan kod yaz*/}
      {/* her girilen todo için index ekleyip todo ların kaçıncı sırada olduğunu belirtecek bir şey ekle */}
    </div>
  );
}

export default App;
