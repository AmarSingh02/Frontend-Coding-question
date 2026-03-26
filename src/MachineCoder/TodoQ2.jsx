import React, { useEffect, useState } from 'react'

const TodoQ2 = () => {
    const catagories=["low", "medium", "high"]
    const [inputval,setInputVal]=useState("");
    const [todos,setTodos]=useState([])
    const [selectPriority,setSelectPriority]=useState("low")
    const [editId,setEditId]=useState(null);
     const [edit,setEdit]=useState(false)

     useEffect(()=>{
            const savedTodo=localStorage.getItem("todo");
            if(savedTodo){
                setTodos(JSON.parse(savedTodo))
            }
     },[])

     useEffect(()=>{
        localStorage.setItem("todo" ,JSON.stringify(todos))
        
     },[todos])

    const addTodo=()=>{
        if(inputval.trim().length=== 0)  return;
  if (edit) {
        setTodos((prev) =>
            prev.map((item) =>
                item.id === editId
                    ? { ...item, text: inputval, priporty: selectPriority }
                    : item
            )
        );
        setEdit(false);
        setEditId(null);
        setInputVal("")
        return; 
        }
        setTodos((prev)=>[
            ...prev,{id:Date.now(),text:inputval,complete:false,priporty:selectPriority}
        ])
        setInputVal("")
        setSelectPriority("low")
    }

    const handleDel=(id)=>{
        setTodos(todos.filter((item)=>item.id!==id))
    }

    const handleToggle=(id)=>{
        setTodos((prev)=>
            prev.map((item)=>(
                item.id===id ? {...item, complete: !item.complete} :item
            ))
        )
    }

   const handleEdit = (id) => {
    const selected = todos.find((item) => item.id === id);

    setInputVal(selected.text);
    setSelectPriority(selected.priporty);
    setEditId(id);
    setEdit(true);
};
  return (
  <div style={{ width: "500px", margin: "50px auto", fontFamily: "Arial" }}>

    {/* Input Row */}
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      
      <input
        type="text"
        placeholder="Enter the todo..."
        value={inputval}
        onChange={(e) => setInputVal(e.target.value)}
        style={{ flex: 1, padding: "8px" }}
      />

      <select
        value={selectPriority}
        onChange={(e) => setSelectPriority(e.target.value)}
        style={{ padding: "8px" }}
      >
        {catagories.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <button
        onClick={addTodo}
        style={{ padding: "8px 12px", cursor: "pointer" }}
      >
        {edit ? "Update" : "Add"}
      </button>
    </div>

    {/* Todo List */}
    <div>
      {todos.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >

          <input
            type="checkbox"
            checked={item.complete}
            onChange={() => handleToggle(item.id)}
          />

          <h4
            style={{
              flex: 1,
              margin: 0,
              textDecoration: item.complete ? "line-through" : "none",
            }}
          >
            {item.text}
          </h4>

          <p style={{ width: "80px", margin: 0 }}>
            {item.priporty}
          </p>

          <button
            onClick={() => handleEdit(item.id)}
            style={{ padding: "5px 10px", cursor: "pointer" }}
          >
            Edit
          </button>

          <button
            onClick={() => handleDel(item.id)}
            style={{ padding: "5px 10px", cursor: "pointer", color: "red" }}
          >
            Delete
          </button>

        </div>
      ))}
    </div>

  </div>
);
}

export default TodoQ2
