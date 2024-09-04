import React, { useState } from "react";
import DropdownItems from './DropdownItems';
import './styles.css';


const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState('main')
    return (
        <div className="dropdown">
            <div className="menu">
                <></>
                <DropdownItems>Sign Up</DropdownItems>
                {/* <DropdownItems leftIcon = {<></>} rightIcon={<></>}>

            </DropdownItems> */}
            </div>

        </div>
    )
}
export default DropdownMenu;