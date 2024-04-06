import React from "react";
import './styles.css';
import Cards from "./Cards";
import tatum2 from '../images/tatum-2-basketball-shoes-sn3SML-removebg-preview.png';
import giannisImmortality from '../images/giannis-immortality-3-5-the-hard-way-basketball-shoes-H93p2P.png'
import ja1 from '../images/ja-1-vacation-basketball-shoes-bCx2W3.png'
import tatumVortex from '../images/tatum-2-vortex-basketball-shoes-vxD2dS.jpeg'
import usamaakram from '../images/usama-akram-kP6knT7tjn4-unsplash-removebg-preview.png'
import lebronGen2 from '../images/lebron-nxxt-gen-basketball-shoes-55g4w1.png'
const SecondPage = () => {
    return (
        <div>
            <p className="life-text">IT'S A PASSION,<br /> A WAY OF LIFE.</p>
            <p className="line"></p>
            <p className="featured-text">FEATURED</p>
            <div className="featured-cards">
                <div className="featured-cards-item">
                    <Cards imageSrc={tatum2} title='TATUM 2' price='$130' colors='1 colour' />
                </div>
                <div className="featured-cards-item">
                    <Cards imageSrc={giannisImmortality} title='Giannis Immortality' price='$130' colors='1 colour' />
                </div>
                <div className="featured-cards-item">
                    <Cards imageSrc={lebronGen2} title='Lebron Next Gen' price='$130' colors='1 colour' />
                </div>
                <div className="featured-cards-item">
                    <Cards imageSrc={ja1} title='Ja 1' price='$130' colors='1 colour' />
                </div>
                <div className="featured-cards-item">
                    <Cards imageSrc={tatumVortex} title='Tatum 2 Vortex' price='$130' colors='1 colour' />
                </div>
                <div className="featured-cards-item">
                    <Cards imageSrc={usamaakram} title='Usama Akram' price='$130' colors='1 colour' />
                </div>
            </div>
        </div>
    )
}
export default SecondPage;