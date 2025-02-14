import React from 'react';
import './Css/Login.css'
import { FaUser } from "react-icons/fa";
import { MdOutlineKey } from "react-icons/md";

const Login = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <MdOutlineKey className='icon'/>
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
