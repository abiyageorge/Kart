import React from 'react';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';

function ProductCard({ product }) {  // <-- This file is responsible for displaying each product
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));  // <-- Calls the Redux function
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <button onClick={handleAddToWishlist}>
        <i className="fa-solid fa-heart"></i> Add to Wishlist
      </button>
    </div>
  );
}

export default ProductCard;
