import React, { useState } from 'react'
import { validateRegisterForm } from '../../helper';
import { LOGIN } from '../../ApiUrls';
import { useNavigate } from 'react-router';

const LoginForm = () => {

const [formData, setFormData]=useState({
  username:"",
  password:"",
})
const navigate=useNavigate();

const [error,setErrors]=useState({})
const handleChange=(e)=>{
  const {name,value}=e.target;
  setFormData({...formData,[name]:value})

}

const handleSubmit=async(e)=>{
   e.preventDefault();
     const validationErrors = validateRegisterForm(formData);
       setErrors(validationErrors);
   
       if (Object.keys(validationErrors).length > 0) return;
  const payload={
    username:formData.username,
    password:formData.password,


  }
  try {
    const {data}=await LOGIN(payload)
    console.log(data)
    navigate('/dashbaord')
    
  } catch (error) {
    console.log(error)
  }
  
}
  return (
    <div style={{width:'500px', textAlign:'center'}}>
       <form onSubmit={handleSubmit} className="space-y-5">
               

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={formData.username}
              placeholder="Enter your username"
              className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2`}
            />
            
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
            value={formData.password}
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2`}
            />
         
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
    </div>
  )
}

export default LoginForm
