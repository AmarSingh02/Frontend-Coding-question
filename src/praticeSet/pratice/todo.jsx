import React, { useState, useEffect } from 'react'

const ApiCalls = () => {
  const [task, setTask] = useState("")
  const [todo, setTodo] = useState([])
  const [editId, setEditId] = useState(null) // track which task is being edited

  // Load saved todos on mount
  useEffect(() => {
    const savedTask = localStorage.getItem('todo')
    if (savedTask) {
      try {
        setTodo(JSON.parse(savedTask))
      } catch (e) {
        console.error("Failed to parse todos:", e)
      }
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const handleSubmit = () => {
    if (task.trim() === "") return

    if (editId) {
  
      const updated = todo.map((item) =>
        item.id === editId ? { ...item, title: task } : item
      )
      setTodo(updated)
      setEditId(null)
    } else {
  
      const newTask = { id: Date.now(), title: task }
      setTodo((prev) => [...prev, newTask])
    }

    setTask("")
  }

  // Delete Task
  const handleDel = (id) => {
    const response = prompt("Type 'yes' to delete this task:")
    if (response?.toLowerCase() !== "yes") return
    setTodo((prev) => prev.filter((item) => item.id !== id))
  }

  // Edit Task
  const handleEdit = (id) => {
    const selected = todo.find((item) => item.id === id)
    setTask(selected.title)
    setEditId(id)
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Todo"
      />
      <button onClick={handleSubmit}>{editId ? "Update" : "Add"}</button>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => handleEdit(item.id)}>Edit</button>{" "}
            <button onClick={() => handleDel(item.id)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ApiCalls
