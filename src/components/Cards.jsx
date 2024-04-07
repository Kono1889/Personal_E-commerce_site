import React from "react";


const Cards = ({ imageSrc, title, price, colors,addToCart }) => {
    const handleOnclick =()=>{
        addToCart({ id: 3, name: 'Product 3', price: 39.99 });
    }
    return (
        <div className="card">
            <div className="card-card">
                <img src={imageSrc} alt="pic2" />
            </div>
            <div className="card-text">
                <p>{title}</p>
                <p>{price}</p>
            </div>
            <div className="card-card-grid2">
                <p class='text-slate-600 text-sm'>{colors}</p>
                <button onClick={handleOnclick} className="addBtn">Add to Cart</button>

            </div>
        </div>
    )
}
export default Cards;