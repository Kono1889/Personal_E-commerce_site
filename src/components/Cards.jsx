import React, { useState } from "react";
import Modal from 'react-modal';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Cards = ({ imageSrc, title, price, colors, addToCart }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOnclick = () => {
        addToCart({ id: 3, name: 'Product 3', price: 39.99 });
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="card">
            <Slider {...settings}>
                <div className="card-card" onClick={handleImageClick}>
                    <img src={imageSrc} alt="pic2" />
                </div>
            <div class='card-text text-center '>
                <p>{title}</p>
                <p>{price}</p>
            </div>
            <div className="card-card-grid2 text-center">
                <p className='text-slate-600 text-sm'>{colors}</p>
                <button onClick={handleOnclick} className="addBtn">Add to Cart</button>
            </div>

            </Slider>


            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <img src={imageSrc} alt="modal-img" />
            </Modal>
        </div>
    );
}
export default Cards;
