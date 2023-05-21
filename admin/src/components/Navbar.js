import React from "react";
import logo from "../images/logo.jpg";


function Navbar() {
    return (
        <div className="navbar bg-primary-content">
            <div className="flex-1">
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={logo}/>
                    </div>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/points'>Pickup Points</a></li>
                    <li><a href='/stores'>eStores</a></li>
                    <li><a href='/deliveries'>Deliveries</a></li>
                    <li><a href= '/statistics'>Statistics</a></li>
                    <li><a href='/'>Log out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;