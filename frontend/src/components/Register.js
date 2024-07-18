import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        console.log('Registration successful');
        navigate('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container1'>
      <div className='welcome-section'>
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className='sign-in-btn' onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
      <div className='register-section'>
        <h1>Create Account</h1>
        <div>
          <button className='social-btn google-btn'>Google Login</button>
          <button className='social-btn facebook-btn'>Facebook Login</button>

          <p>or use your email for registration</p>
          <form onSubmit={handleRegister}>
            <input
              type='text'
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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

            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
