import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './register.css';
const url = 'http://localhost:5000/api/v1/';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post(url + 'auth/register', {
        username,
        email,
        password,
      });
      response.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div>
      <div className='register'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type='text'
            className='registerInput'
            placeholder='Enter Your Username..'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type='text'
            className='registerInput'
            placeholder='Enter Your Email..'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='password'
            className='registerInput'
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='registerBtn'>
            Register
          </button>
          <button type='submit' className='registerLoginBtn'>
            <Link to='/login' className='link'>
              Login
            </Link>
          </button>
          {error && (
            <span
              style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}
            >
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
