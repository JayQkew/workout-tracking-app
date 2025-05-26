import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';

function Header(){
    return(
        <header className='app-header'>
          <NavLink 
            to="/" 
            className={(({isActive}) => isActive ? "nav-link app-logo active" : "nav-link app-logo")}
          >
            LightWeight
          </NavLink>
          <nav>
            <ul className="nav-menu">
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
            </ul>
          </nav>
          <button className='nav-link theme-button'>Theme</button>
        </header>
    )
}

export default Header;