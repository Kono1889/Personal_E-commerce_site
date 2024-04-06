import React from "react";

const Cards = ({ imageSrc, title, price, colors }) =>{
    return(
        <div className="card">
            <div className="card-card"><img src={imageSrc} alt="pic2" /></div>
            <div className="card-text">
                <p>{title}</p>
                <p>{price}</p>
            </div>
            <p class ='text-slate-600 text-sm'>{colors}</p>
        </div>
    )
}
export default Cards;