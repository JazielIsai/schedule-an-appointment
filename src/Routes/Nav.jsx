
import { NavLink } from 'react-router-dom';
import { path } from './path';


const Nav = ( { showNav, setShowNav } ) => {
    
    const handleOnClick = () => {
        setShowNav(!showNav);
    }

    return (
        <nav className= { showNav ? "sidebar_nav active" : "sidebar_nav" } >
            <ul>
                <li> 
                    {
                        path.map( ( {to, name, icon}, i ) => (
                            <NavLink
                                key={ `${name}_${i}` }
                                className = { "nav-link"}
                                onClick = { handleOnClick }             
                                to = { to }
                            > 
                               <strong> { icon } </strong> { name }
                            </NavLink>
                        ))
                    }
                </li>
               
            </ul>
        </nav>
    );
};

export default Nav;
