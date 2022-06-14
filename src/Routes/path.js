/* Pages */
import Home from '../Pages/Home';
import About from '../Pages/About';
import Login from '../Pages/Login';
import Schedule from '../Pages/Schedule';

/* React-Icons */
import { HiHome } from 'react-icons/hi';
import { IoIosMan } from 'react-icons/io';
import { BiLogIn } from 'react-icons/bi';
import { AiFillSchedule } from 'react-icons/ai';

export const path = [
    {
        to: '/',
        path: '/',
        Component: <Home />,
        name: 'Inicio',
        icon: <HiHome />
    },
    {
        to: '/about',
        path: 'about',
        Component: <About />,
        name: 'Acerca',
        icon: <IoIosMan />
    },
    {
        to: '/login',
        path: 'login',
        Component: <Login/>,
        name: 'Iniciar Seción',
        icon: <BiLogIn />
    },
    {
        to: '/schedule',
        path: 'schedule',
        Component: <Schedule />,
        name: 'Agendar',
        icon: <AiFillSchedule />
    },
    {
        to: '/',
        path: '',
        Component: '',
        name: ''
    },
    {
        to: '/',
        path: '',
        Component: '',
        name: ''
    }
]