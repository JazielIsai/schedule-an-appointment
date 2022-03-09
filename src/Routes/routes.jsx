import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from '../Components/Navegation/Nav';

export function Navegation () {

    return (
        <BrowserRouter>
            <div>
                <Nav />
            </div>
            <Routes>
                <Route path="" element= { '' } />
            </Routes>
        </BrowserRouter>
    );
}