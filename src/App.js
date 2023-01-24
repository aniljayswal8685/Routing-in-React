import React from 'react';
import './style.css';
import About from './About';
import Form from './Form';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Form">Form</Link>
        <Route path="" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Form" component={Form} />
        
      </Router>
    </div>
  );
}
