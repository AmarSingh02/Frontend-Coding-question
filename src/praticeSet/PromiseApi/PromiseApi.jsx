import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PromiseApi = () => {

     const [datas,setDatas]=useState([])

    const url1="https://jsonplaceholder.typicode.com/posts";
    const url2="https://jsonplaceholder.typicode.com/users";

 useEffect(()=>{


  const apicall1=async()=>{
    const [postRes,userRes]=await Promise.all([
      axios.get(url1),
      axios.get(url2)
    ]);

    const posts=postRes.data;
    
    const users=userRes.data;

    const merged=posts.reduce((acc,curval)=>{
      const user=users.find((u)=>u.id === curval.userId);
      acc.push({...curval,user})
      return acc;
    },[])
    setDatas(merged)
    console.log(merged)
  }
  apicall1();
 },[])
  return (
    <div>
<table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          fontFamily: "Arial, sans-serif",
          padding:'10px'
        }}
      >
        <thead style={{ backgroundColor: "#f2f2f2", padding:'10px' }}>
          <tr>
            <th>Post ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody style={{padding:'10px'}}>
          {datas.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>{item.user?.id}</td>
              <td>{item.user?.name}</td>
              <td>{item.user?.email}</td>
              <td>{item.user?.username}</td>
              <td>{item.user?.phone}</td>
              <td>{item.user?.company?.name}</td>
              <td>
                {item.user?.address?.street}, {item.user?.address?.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PromiseApi
