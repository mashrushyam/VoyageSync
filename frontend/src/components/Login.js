import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginRegister.css';
import { useAuth } from './AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Logged in successfully');
      login(); // Assuming this updates your authentication state
      navigate('/home'); // Navigate to '/home' after successful login
    } catch (err) {
      console.error(err);
      alert('Failed to login');
    }
  };

  return (
    <div className='container1'>
      <div className='welcome-section'>
        <h1>Welcome To Website!</h1>
        <p>To start connection with us please register with your personal info</p>
        <button className='sign-in-btn' onClick={() => navigate('/register')}>Register</button>
      </div>
      <div className='register-section'>
        <h1>Login To Account</h1>
        <div>
          <button className='social-btn google-btn'>Google Login</button>
          <button className='social-btn facebook-btn'>Facebook Login</button>

          <p>or use your email for login</p>
          <form onSubmit={handleLogin}>
            <input 
              type='email'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
