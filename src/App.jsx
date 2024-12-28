import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartSummary from './pages/CartSummary';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Loaded cart from localStorage:', savedCart);
    setCart(savedCart);
  }, []);

  useEffect(() => {
    console.log('Cart updated, saving to localStorage:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Navbar onSearch={setSearchQuery} />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Home searchQuery={searchQuery} cart={cart} setCart={setCart} />}
          />
          <Route path="/cart" element={<CartSummary cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
