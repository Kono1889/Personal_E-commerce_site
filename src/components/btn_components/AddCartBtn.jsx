// import React from "react";

// const AddCartBtn = ({ cartItems, setCartItems }) => {
//     const addToCart = (item) => {
//         const itemExists = cartItems.find(cartItem => cartItem.id === item.id);
//         if (itemExists) {
//             const updatedCartItems = cartItems.map(cartItem => {
//                 if (cartItem.id === item.id) {
//                     return { ...cartItem, quantity: cartItem.quantity + 1 };
//                 }
//                 return cartItem;
//             });
//             setCartItems(updatedCartItems);
//         } else {
//             setCartItems([...cartItems, { ...item, quantity: 1 }]);
//         }
//     };

//     return (
//         <div>
//             <button onClick={() => addToCart({ id: 3, name: 'Product 3', price: 39.99 })} className="add-btn">Add to Cart</button>
//         </div>
//     );
// };

// export default AddCartBtn;
