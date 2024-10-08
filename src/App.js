import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import MainNavBar from './main/MainNavBar';

export default function App() {
  // const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  // const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = useState(false);
  

  // useEffect(() => {
  //   // const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  //   // const employeeLoggedIn = localStorage.getItem('isEmployeeLoggedIn') === 'true';
    
  //   setIsAdminLoggedIn(adminLoggedIn);
  //   setIsEmployeeLoggedIn(employeeLoggedIn);
  // }, []);

  // const onAdminLogin = () => {
  //   localStorage.setItem('isAdminLoggedIn', 'true');
  //   setIsAdminLoggedIn(true);
  // };

  // const onEmployeeLogin = () => {
  //   localStorage.setItem('isEmployeeLoggedIn', 'true');
  //   setIsEmployeeLoggedIn(true);
  // };

  return (
    <div className="App">
      <h1 align="center"> Welcome</h1>
      <Router>
          <MainNavBar
          />
      </Router>

    </div>
  );
}