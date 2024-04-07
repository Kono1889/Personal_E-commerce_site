import React from "react";
import picture1 from '../images/Screenshot_from_2024-04-05_10-27-40-removebg-preview.png';
import Cards from "./Cards";
import Nike from '../images/picture1.png';
import './styles.css'
const LandingPage = () => {
    return (
        <div>
            <p className="landing-text">HO<img src={picture1} alt="pic1" />PS</p>
            {/* <Cards
                imageSrc={Nike}
            /> */}
            <p className="landing-text2">Our basketball shoes are more than just <br />high tops; they're a statement of your <br />commitment to the game</p>

        </div>
    )
}
export default LandingPage;