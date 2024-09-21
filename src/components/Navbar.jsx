import React, { useState } from "react";
import './styles.css';
import MenDropdown from "./NavDropdowns/MenDropdown";
import WomenDropdown from "./NavDropdowns/WomenDropdown";

const Navbar = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  // const [activeDropdown1, setActiveDropdown1] = useState(false);

  // Toggle dropdown visibility on "Men" click
  const handleMenClick = () => {
    setActiveDropdown(!activeDropdown); 
  }

  const handleWomenClick=()=>{
    setActiveDropdown(!activeDropdown);
  }

  return (
    <div>
      <nav className="Navbar">
        <ul className="header-left">
          <li><a href="#">New & Featured</a></li>
          <li onClick={handleMenClick}><a href="#">Men</a></li>
          <li onClick={handleWomenClick}><a href="#">Women</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
        <ul className="navbar-nav">
          {props.children}
        </ul>
      </nav> 
      {activeDropdown && <WomenDropdown/>}
      {activeDropdown && <MenDropdown />}
    </div>
  );
}

export default Navbar;
