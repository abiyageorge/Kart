import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <p><strong>{item.name}</strong></p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
