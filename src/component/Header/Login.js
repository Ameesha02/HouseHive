import React from 'react'
import "./index.css"
const Login = () => {
  return (
    <div className='formContainer L' style={{width:"100%"}}>
    <div className="formWrapper">
        <span className="logo">HouseHive</span>
        <span className="title">Login</span>
        <form>
           
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
          
            <button>Login</button>
        </form>
        <p>You do have an account?  Sign Up</p>
    </div>
  
</div>
  )
}

export default Login
