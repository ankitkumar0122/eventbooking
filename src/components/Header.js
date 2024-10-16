import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';
import './styles/Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header>
      <h1>Event Booking System</h1>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <span>Welcome, {user?.email}!</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
