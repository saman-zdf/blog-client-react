import React from 'react'
import './register.css'
const Register = () => {
  return (
    <div>
      <div className='register'>
        <span className="registerTitle">Register</span>
        <form className='registerForm'>
          <label >Username</label>
          <input type="text" className='registerInput'  placeholder='Enter Your Username..'/>
          <label >Email</label>
          <input type="text" className='registerInput'  placeholder='Enter Your Email..'/>
          <label >Password</label>
          <input type="password" className='registerInput'  placeholder='Enter Your Password'/>
          <button type='submit' className='registerBtn'>Register</button>
          <button type='submit' className='registerLoginBtn'>Login</button>
        </form> 
      </div>
    </div>
  )
}

export default Register
