import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import HORForm from './components/HORForm';

function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login', 'dashboard', 'hor_form'

  const handleLoginSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('login');
  };

  const handleGenerateForm = () => {
    setCurrentView('hor_form');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  return (
    <>
      {currentView === 'login' && <Login onLoginSuccess={handleLoginSuccess} />}
      {currentView === 'dashboard' && <Dashboard onLogout={handleLogout} onGenerateForm={handleGenerateForm} />}
      {currentView === 'hor_form' && <HORForm onBack={handleBackToDashboard} />}
    </>
  );
}

export default App;
