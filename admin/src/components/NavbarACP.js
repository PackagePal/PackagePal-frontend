import React from "react";
import logo from "../images/logo.jpg";


function NavbarACP() {
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
                    <li><a href='/incoming'>Incoming</a></li>
                </ul>
            </div>
        </div>
    );
}
export default NavbarACP;