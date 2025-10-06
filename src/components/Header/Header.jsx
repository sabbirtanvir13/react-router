import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mobiles'>Mobiles</NavLink>
            <NavLink to='/laptops'>Laptops</NavLink>
            <NavLink to='/Users'>Users</NavLink>
          </nav>
        </div>
    );
        
};

export default Header;