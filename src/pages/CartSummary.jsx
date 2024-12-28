import React from 'react';
import './CartSummary.css';

const CartSummary = ({ cart, setCart }) => {
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1); // Remove the item if quantity reaches 0
    }
    setCart(updatedCart);
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} className="cart-item">
              <div className="item-details">
                <p className="item-name">{product.name}</p>
                <p>${product.price.toFixed(2)} x {product.quantity || 1}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(index)}>-</button>
                <span>{product.quantity || 1}</span>
                <button onClick={() => incrementQuantity(index)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <h3 className="total-price">Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
    </div>
  );
};

export default CartSummary;