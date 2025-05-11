import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';

function Navbar(){
    return(
        <nav className='navbar'>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/home" 
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/plan" 
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              {isDesktop ? "Plan" : "Plans"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/session" 
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              {isDesktop ? "Session" : "Sessions"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/stat" 
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              {isDesktop ? "Stat" : "Stats"}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/settings" 
              className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
            >
              Settings
            </NavLink>
          </li>
        </ul>
        </nav>
    )
}

export default Navbar;