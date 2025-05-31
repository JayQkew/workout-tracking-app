import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LightMode } from '../../Styles/noun-dark-theme-6404897.svg';

function Header(){
    return(
        <header className='app-header'>
          <nav>
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={(({isActive}) => isActive ? "nav-link active" : "nav-link app-logo")}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/plan" 
                  className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                >
                  Plan
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/session" 
                  className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                >
                  Session
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/stat" 
                  className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                >
                  Stat
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="light-mode nav-link">
                  <LightMode />
                </div>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default Header;