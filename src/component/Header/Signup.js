import React from 'react'
import "./index.css"

const Signup = () => {
    function handleSubmit(event) {
        event.preventDefault()
    
    }
  return (
    <div className='formContainer S'>
    <div className="formWrapper">
        <span className="logo">HouseHive </span>
        
      <span className="title">Register</span>
        
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='display name'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <input style={{display:"none"}} type='file' id="file"/>
         
          
            <button>Sign Up</button>

        </form>
        <p>You do have an account? Login</p>
    </div>
  
</div>
  )
}

export default Signup
