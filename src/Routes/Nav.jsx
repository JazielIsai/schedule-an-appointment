
import { NavLink } from 'react-router-dom';
import { path } from './path';


const Nav = ( { showNav } ) => {
    
  
    return (
        <nav className= { showNav ? "sidebar_nav active" : "sidebar_nav" } >
            <ul>
                <li> 
                    {
                        path.map( ( {to, name}, i ) => (
                            <NavLink
                                key={ `${name}_${i}` }
                                className = "nav-link"
                                to = { to }
                            > 
                                { name }
                            </NavLink>
                        ))
                    }
                </li>
               
            </ul>
        </nav>
    );
};

export default Nav;
