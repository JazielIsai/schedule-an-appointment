import { useContext } from 'react';
import { HiMenu } from "react-icons/hi";
import { DataGeneralContext } from '../../Context/DataGeneralContext';

export const Header = () => {

    const { showNav, setShowNav } = useContext(DataGeneralContext);

    return(
        <header className="header">
            <HiMenu onClick = { () => setShowNav(!showNav) } />
            <h1 className="title_header"> Psicologo Carlos Sanchez </h1>
            <h2 className="login_header">Iniciar</h2>
        </header>
    )
}