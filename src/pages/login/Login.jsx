import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';

const url = 'http://localhost:5000/api/v1';
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await axios.post(url + '/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  console.log(isFetching);
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          className='loginInput'
          placeholder='Enter Your Username..'
          ref={userRef}
        />
        <label>Password</label>
        <input
          type='password'
          className='loginInput'
          placeholder='Enter Your Password'
          ref={passwordRef}
        />
        <button type='submit' className='loginBtn' disabled={isFetching}>
          Login
        </button>
        <button type='submit' className='loginRegisterBtn'>
          <Link to='/register' className='link'>
            Register
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
