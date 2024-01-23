import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <h1 id="brand-name">Curly Girl Hair Care</h1>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default NavBar;