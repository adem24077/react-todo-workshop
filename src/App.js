import "./App.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="center">
        <h1>Yapılacaklar Listesi</h1>
        <input
          type="text"
          placeholder="Yapılacak bir şey girin."
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Ekle</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>
              {todo}
              <button onClick={(index) => handleDelete(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
