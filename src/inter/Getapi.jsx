import React, { useState } from 'react'

const Getapi = () => {

  const categories=["low","medium", "high"]
    const [inputVal,setInputVal]=useState("");

    const [todos,setTodos]=useState([]);
    const [selectPriority,setSelectPriority]=useState("low")

    const handleTodo=()=>{
      if(inputVal.trim()===""){
        alert("Please enter the todo")
        return ""
      }

        setTodos((prev)=>[
            ...prev,
            {id:Date.now(),text:inputVal,priority:selectPriority,complete:false, }
        ])
        setInputVal("")
    }


    const handleDel=(id)=>{
        setTodos(todos.filter((item)=>item.id!== id))
    }

    const handleToogle=(id)=>{
        setTodos(todos.map((item)=> item.id===id ? { ...item, complete: !item.complete } : item))
    }
  return (
    <div>
      <input type='text' placeholder='enter todo'  value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />

      <select  value={selectPriority} onChange={(e)=>setSelectPriority(e.target.value)}>

       
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={handleTodo}>Add</button>


      <div >
        {todos.map((item)=>(
            <div key={item.id} style={{display:'flex', alignItems:'center', textAlign:'center', gap:'30px'}}>

                <input type='checkbox' onChange={()=>handleToogle(item.id)}checked={item.complete} />
                <p style={{textDecoration:item.complete ? "line-through" :"none"}}>{item.text}</p>
              <p>{item.priority}</p>
                <button onClick={()=>handleDel(item.id)}>del</button>


            </div>
        ))}
      </div>
    </div>
  )
}

export default Getapi
