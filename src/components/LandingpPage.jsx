import React from "react";
import picture1 from '../images/Screenshot_from_2024-04-05_10-27-40-removebg-preview.png';
import Cards from "./Cards";
import Nike from '../images/picture1.png';
import './styles.css'
import videobg from "../images/videobg.mp4";

const LandingPage = () => {
    return (
        <div>
            <video className="video1" src={videobg} autoPlay loop muted/> 
            <div className="content">
                <p className="landing-text">HOOPS</p>
                <hr className="hor1"/>
                <p className="landing-text2">Our basketball shoes are more than just <br />high tops; they're a statement of your <br />commitment to the game</p>
            </div>
          
        </div>
    )
}
export default LandingPage;