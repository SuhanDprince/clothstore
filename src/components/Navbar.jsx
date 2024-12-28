import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <h1>🛍️ Cloth Store</h1>
      <input
        type="text"
        placeholder="Search by brand or category..."
        onChange={handleSearch}
        className="search-bar"
      />
      <div>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Cart 🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;
