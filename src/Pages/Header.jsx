import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {HiMenu} from "react-icons/hi";
import {DataGeneralContext} from '../Context/DataGeneralContext';

const Header = () => {

    const {showNav, setShowNav} = useContext(DataGeneralContext);

    return (
        <header className="header">
            <HiMenu onClick={() => setShowNav(!showNav)}/>
            <h1 className="title_header"> Psicólogo clínico y psicoterapia </h1>
            <NavLink to='/login'>
                <h2 className="login_header"> Iniciar Sesión </h2>
            </NavLink>
        </header>
    )
}

export default Header;