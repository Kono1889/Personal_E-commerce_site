import React, { useState } from "react";
import Cards from './Cards';
import './styles.css'

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
      { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
      { id: 2, name: 'Product 2', price: 29.99, quantity: 1 }
    ]);
  
    const removeFromCart = (itemId) => {
      setCartItems(cartItems.filter(item => item.id !== itemId));
    };
  
    const updateQuantity = (itemId, newQuantity) => {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    };
  
    const addToCart = (item) => {
      const itemExists = cartItems.find(cartItem => cartItem.id === item.id);
      if (itemExists) {
        updateQuantity(item.id, itemExists.quantity + 1);
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
    };
  
    const decreaseQuantity = (itemId, currentQuantity) => {
      if (currentQuantity > 1) {
        updateQuantity(itemId, currentQuantity - 1);
      }
    };
  
    return (
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id, item.quantity)} className="control-btn">-</button>
                    <input type="text" value={item.quantity} readOnly className="quantity-input" />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="control-btn">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </div>
            ))}
          </div>
        )}
        <Cards addToCart ={addToCart}/>
      </div>
    );
  };
  
  export default CartPage;
  