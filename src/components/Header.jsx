import React from "react";
import './styles.css';
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import DropdownMenu from "./DropdownMenu";

const Header = () => {
    return (
        <div>
            <Navbar>


                <NavItem icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                <NavItem icon={<FontAwesomeIcon icon={faHeart} />} />
                <NavItem icon={<FontAwesomeIcon icon={faCartShopping} />} />
                <NavItem icon={<FontAwesomeIcon icon={faCaretDown} />}>
                    <DropdownMenu />
                </NavItem>
            </Navbar>
        </div>
    )
}

export default Header;