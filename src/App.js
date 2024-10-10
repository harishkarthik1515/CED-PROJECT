import React from 'react';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Getstarted from './components/Getstarted';
import Userlogin from './components/Userlogin';
import Adminlogin from './components/Adminlogin';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#getstarted">Get Started</a></li>
          <li><a href="#userlogin">User Login</a></li>
          <li><a href="#adminlogin">Admin Login</a></li>
        </ul>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="dashboard">
        <Dashboard />
      </section>
      <section id="getstarted">
        <Getstarted />
      </section>
      <section id="userlogin">
        <Userlogin />
      </section>
      <section id="adminlogin">
        <Adminlogin />
      </section>
    </div>
  );
}

export default App;
