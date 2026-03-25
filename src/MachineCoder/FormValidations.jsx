/* eslint-disable no-undef */
import React, { useState } from 'react'

const FormValidations = () => {
    const initialValue = {
        fullname: "",
        email: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialValue);
    const [error,setError]=useState({})
    const [loading,setLoading]=useState(false)

    const handleValidation=()=>{
        const validation={};

        if(formData.fullname.trim()===""){
            validation.fullname="Name field is required"
        }
        else if(formData.fullname.length<3){
            validation.fullname="Atleast name should contain 3 letters"
        }

        if(formData.email.trim()===""){
            validation.email="Email required"

        }

         else if(!formData.email.includes("@")){
            validation.email="Please include @"

        }
        else if(!formData.email.includes(".")){
            validation.email="please include ."
        }

        if(formData.description.trim()=== ""){
            validation.description="Description is Required"
        }
        else if (formData.description.trim().length > 20) {
            validation.description = "Words must be less than 20";
}

        return validation;
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormData({
            ...formData,
            [name]:value
        })
    }
    console.log(formData.description.length)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        const validationError=handleValidation();
        setError(validationError);

      
         if (Object.keys(validationError).length > 0) {
    return; 
  }
        console.log("data", formData)
       
        setFormData(formData);
        setFormData(initialValue)
        loading(false)
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='Enter the Name' name='fullname' value={formData.fullname} onChange={handleChange}  />
                    {error.fullname && <p>{error.fullname}</p>}
                </div>
                <div>
                    <input type='text' placeholder='Enter the email' name='email' value={formData.email}   onChange={handleChange}    />
                    {error.email && <p>{error.email}</p>}
                 
                </div>
                <div>
                    <textarea type='text' placeholder='Enter the description' name='description' value={formData.description} onChange={handleChange} />
                    {error.description && <p>{error.description}</p>}
                    <p>{formData.description.length} / 20</p>

                </div>
                
        <button type='submit' > 
          {loading ? "Submitting..." : "Submit"}
        </button>
            </form>

        </div>
    )
}

export default FormValidations
