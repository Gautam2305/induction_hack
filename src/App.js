import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { RouterPath } from './router';

function App() {
  
  return (
    <RouterPath>
      <HomePage/>
      <LoginPage/>
      <SignupPage/>
    </RouterPath>
  );
}

export default App;
