import React from "react";
import useStore from "../store/MSStore";

function Section3() {
  const [text, setText] = React.useState("");
  const { arr1, addTodo, removeTodo } = useStore((state) => state);

  const handleAddTodo = () => {
    addTodo(text);
    setText("");
  };

  const handleRemoveTodo = (index) => {
    removeTodo(index);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Section 3</h1>
      <h2>To do {arr1.length}</h2>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleAddTodo}>Add Todo</button>

      <p>
        {arr1.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => {
                handleRemoveTodo(index);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </p>
    </div>
  );
}

export default Section3;
