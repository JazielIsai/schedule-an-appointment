import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ( { to, nameNav } ) => {
  
  
    return (
        <nav className="nav">
            <ul>
                <li> 
                    <NavLink
                        className = "nav-link"
                        to = { to }
                    > 
                        { nameNav }
                    </NavLink>
                </li>
               
            </ul>
        </nav>
    );
};

export default Nav;
