import React from "react";
import './styles.css';



const Navbar = (props) => {
    return (
        <div>

            <nav className="Navbar">
                <ul className="header-left">
                    <li><a href="#" >New & Featured</a></li>
                    <li><a href="#">Men</a></li>
                    <li> <a href="#">Women</a></li>
                    <li> <a href="#">Sale</a></li>
                </ul>
                <ul className="navbar-nav">
                    {props.children}

                </ul>
            </nav>

        </div>
    )
}

export default Navbar;

