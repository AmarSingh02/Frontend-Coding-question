import React, { useState } from "react";

const Test = () => {
  const [inputval, setInputVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleTodo = () => {

    if (inputval.trim() === "") {
      alert("please enter the todo");
      return;
    }

    // UPDATE TODO
    if (editId) {
      setTodo(
        todo.map((item) =>
          item.id === editId
            ? { ...item, text: inputval }
            : item
        )
      );
      setEditId(null);
    } 
    // ADD TODO
    else {
      setTodo((prev) => [
        ...prev,
        { id: Date.now(), text: inputval, complete: false },
      ]);
    }

    setInputVal("");
  };

  const deletetTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id
          ? { ...item, complete: !item.complete }
          : item
      )
    );
  };
  

  const handleEdit = (item) => {
    setInputVal(item.text);
    setEditId(item.id);
  };

  return (
    <div>

      <input
        type="text"
        placeholder="enter todo"
        value={inputval}
        onChange={(e) => setInputVal(e.target.value)}
      />

      <button onClick={handleTodo}>
        {editId ? "save" : "Add"}
      </button>

      {todo.map((item) => (
        <div key={item.id}>

          <input
            type="checkbox"
            checked={item.complete}
            onChange={() => handleToggle(item.id)}
          />

          <h3
            style={{
              textDecoration: item.complete
                ? "line-through"
                : "none",
            }}
          >
            {item.text}
          </h3>

          <button onClick={() => deletetTodo(item.id)}>
            delete
          </button>

          <button onClick={() => handleEdit(item)}>
            edit
          </button>

        </div>
      ))}
    </div>
  );
};

export default Test;