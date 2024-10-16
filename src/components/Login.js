import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';
import './styles/Login.css';

const mockUsers = [
  { email: 'ankitsainijeemain@gmail.com', password: 'abc@123' },
  { email: 'admin@gmail.com', password: 'admin' },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsers.find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      login(); 
      navigate('/');  
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
