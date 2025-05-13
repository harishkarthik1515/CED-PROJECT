import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Getstarted from './components/Getstarted';
import Userlogin from './components/Userlogin';
import Adminlogin from './components/Adminlogin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="fixed top-0 w-full bg-secondary z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Link to="/" className="text-primary text-xl font-bold">
                  EventPulse
                </Link>
              </motion.div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">About</Link>
                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
                  <Link to="/getstarted" className="nav-link">Get Started</Link>
                  <Link to="/userlogin" className="button-primary">Login</Link>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                {/* Add mobile menu implementation here */}
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/getstarted" element={<Getstarted />} />
            <Route path="/userlogin" element={<Userlogin />} />
            <Route path="/adminlogin" element={<Adminlogin />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;