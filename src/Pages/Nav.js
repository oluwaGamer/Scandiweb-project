import { Outlet, NavLink } from "react-router-dom";
import React from 'react';
import '../Css/nav.css';
import logo from '../Css/logo.svg'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
      <nav>
        <ul>
          <li className="active">
            <NavLink to="/" className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>ALL CATEGORY
            </NavLink>
          </li>
          <li>
            <NavLink to="/clothes" className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>CLOTHES
            </NavLink>
          </li>
          <li>
            <NavLink to="/tech" className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>TECH
            </NavLink>
          </li>
        </ul>
        <img src={logo} alt={logo}></img>
        <div>Price and Cart</div>
      </nav>
        <Outlet />
    </>
    
  )}

}

export default Nav;