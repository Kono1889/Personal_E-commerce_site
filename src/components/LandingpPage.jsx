import React from "react";
import picture1 from '/home/kono/Desktop/web_dev/e-commerce_site/src/components/images/Screenshot_from_2024-04-05_10-27-40-removebg-preview.png';
import Cards from "./Cards";
import lebron20 from '/home/kono/Desktop/web_dev/e-commerce_site/src/components/images/usama-akram-kP6knT7tjn4-unsplash-removebg-preview.png';
import './styles.css'
const LandingPage = () => {
    return (
        <div>
            <p className="landing-text">HO<img src={picture1} alt="pic1" />PS</p>
            <Cards
                imageSrc={lebron20}
                title='Lebron 20'
                price='$130'
                colors='1 colour'
                className = 'landing-card'
            />
            <p className="landing-text2">Our basketball shoes are more than just <br />high tops; they're a statement of your <br />commitment to the game</p>

        </div>
    )
}
export default LandingPage;