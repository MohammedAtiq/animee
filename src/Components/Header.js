import React from 'react'
import { NavLink } from "react-router-dom";
import logo from './image/logo2.jpg';


const Header = () => {
    return (
        <div className="col-md-2 col1">
            <img className='logo' src={logo} alt="" />
            <div className="navbar">
                <ul className='ulist'>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/addtolist">watchList</NavLink></li>
                </ul>
            </div>
        </div>

    )
}

export default Header