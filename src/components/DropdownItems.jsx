import React from "react";
import './styles.css';

const DropdownItems = (props) => {
    return (
        <div>
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>

            </a>
        </div>
    )
}

export default DropdownItems;