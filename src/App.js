import React from 'react';
import Header from './components/Header';
import EventList from './components/EventList';
import Login from './components/Login';
import EventDetails from './components/EventDetails';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import './styles/App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><EventList /></PrivateRoute>} />
            <Route path="/event/:id" element={<PrivateRoute><EventDetails /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

// Create a PrivateRoute component that checks if the user is authenticated
const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  return user ? children : <Navigate to="/login" />;
};

export default App;
