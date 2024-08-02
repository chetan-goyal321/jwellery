import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Brand</Link>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/products" className="navbar-link">Products</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        <li><Link to="/cart" className="navbar-link">Cart</Link></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon">&#9776;</span>
      </div>
    </nav>
  );
};

export default Nav;
