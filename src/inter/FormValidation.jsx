import React, {  useState } from 'react'
import Popup from '../components/Popup';

const FormValidation = () => {


    const payload={
        fullname:"",
        email:"",
        password:"",
        confirmPassword:"",
        mobile:"",
    }
    const [formdata,setFormData]=useState(payload);
    const [erros,setError]=useState({})

 const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
        ...prev,
        [name]:value
    }))
 }

 const handleValidation = () => {

    const validation = {};

    if (formdata.fullname.trim() === "") {
      validation.fullname = "Name cannot be empty";
    } else if (formdata.fullname.length < 3) {
      validation.fullname = "Name must be at least 3 characters";
    }

    if (!formdata.email.includes("@")) {
      validation.email = "Invalid email";
    }

    if (formdata.password.length < 6) {
      validation.password = "Password must be 6 characters";
    }

    if (formdata.password !== formdata.confirmPassword) {
      validation.confirmPassword = "Passwords do not match";
    }

    if (formdata.mobile.length !== 10) {
      validation.mobile = "Mobile number must be 10 digits";
    }

    setError(validation);

    return Object.keys(validation).length === 0;
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    const valid=handleValidation();
    if(!valid)  return
    
    console.log(formdata);

alert(formdata)
    setFormData(payload); 
  };

  const [isOpen,setOpen]=useState(false);

  

  return (
    <div>


        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' name='fullname' placeholder='enter the name' value={formdata.fullname} onChange={handleChange}   / >        <p>{erros.fullname}</p>
            </div>
            <div>
                <input type='email' name='email' value={formdata.email} onChange={handleChange} />  <p>{erros.email}</p>
            </div> 
            <div>
                <input type='password' name='password' value={formdata.password} onChange={handleChange}/>
                 <p>{erros.password}</p>
            </div>
            <div>
                <input type='password' name='confirmPassword' value={formdata.confirmPassword} onChange={handleChange}/>
                 <p>{erros.confirmPassword}</p>
            </div>
            <div>
                <input type='tel' name='mobile' value={formdata.mobile} onChange={handleChange}/>
                 <p>{erros.mobile}</p>
            </div>

            <button type='submit'>submit</button>
        </form>
    


<button onClick={() => setOpen(true)}>Open Popup</button>

<Popup isOpen={isOpen} onClose={() => setOpen(false)} title="I am here">
  <p>This is popup content</p>
</Popup>
      
    </div>

    
  )
}

export default FormValidation
