import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const { name, image, price, category } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
