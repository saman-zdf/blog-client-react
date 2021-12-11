import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className='loginForm'>
        <label >Email</label>
        <input type="text" className='loginInput'  placeholder='Enter Your Email..'/>
        <label >Password</label>
        <input type="password" className='loginInput'  placeholder='Enter Your Password'/>
        <button type='submit' className='loginBtn'>Login</button>
        <button type='submit' className='loginRegisterBtn'>Register</button>
        </form> 
    </div>
  )
}

export default Login
