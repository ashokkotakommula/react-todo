import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              id="task"
              placeholder="Update todo"
              value={input}
              onChange={handleChange}
              name="text"
            />
            <button onClick={handleSubmit}>Update</button>
          </>
        ) : (
          <>
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
            />
            <button onClick={handleSubmit} id="btn">
              Add
            </button>
          </>
        )}
      </form>
    </>
  );
}

export default TodoForm;
