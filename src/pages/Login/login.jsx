import React, { useEffect, useState, useCallback } from 'react';
import logo from '../../image/logo2.png';
import './Login.css';
import { loginApi } from '../../Api/login';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userData = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  }, [userData, navigate]);

  const handleLogin = useCallback(async () => {
    if (username && password) {
      const success = await loginApi(username, password);
      if (success) {
        navigate('/');
      } else {
        alert("Invalid credentials, please try again.");
      }
    } else {
      alert("Please fill in both fields.");
    }
  }, [username, password, navigate]);

  return (
    <div className='loginpage'>
      <div className='content'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='form'>
          <div className='txt'>
            <h3>Welcome Back, Admin!</h3>
            <p>Enter your admin credentials to continue</p>
          </div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Username'
            value={username}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            value={password}
          />
          <button onClick={handleLogin} className='loginbtn'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
