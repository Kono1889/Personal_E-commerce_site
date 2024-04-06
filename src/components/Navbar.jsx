import React from "react";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import NavItem from "./NavItem";


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

