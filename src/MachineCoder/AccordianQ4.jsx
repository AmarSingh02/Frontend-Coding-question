import React, { useState } from 'react'

const data = [
  {
    id: 1,
    title: "Learn React",
    description: "Understand components, hooks, and state management in React."
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Deep dive into closures, promises, and async/await concepts."
  },
  {
    id: 3,
    title: "Frontend Interview Prep",
    description: "Practice DSA, system design, and React interview questions."
  },
  {
    id: 4,
    title: "Build Projects",
    description: "Create real-world apps like Todo, E-commerce, and Chat apps."
  }
];
const AccordianQ4 = () => {

    const [toggleId,setToogleId]=useState(data[0].id)

    const handelToggle=(id)=>{
        setToogleId(toggleId===id? null :id)
    }
    
  return (
    <div>
      

      {data.map((item)=>(
        <div key={item.id}>
            <h3 onClick={()=>handelToggle(item.id)}> {item.title}  

                <span> {toggleId===item.id ? "close" :"open"} </span>
            </h3>

            {toggleId === item.id && (   
            <p>{item.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default AccordianQ4
