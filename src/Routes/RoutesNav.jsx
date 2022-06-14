import React from 'react';
import { Routes, Route } from "react-router-dom";
import { path } from './path';

function RoutesNav () {


    return (
        <>
            <Routes>
                {
                    path.map( ( { path, Component } ) => (
                        <Route 
                            path = {path} 
                            element= { Component } 

                        />
                    ) )
                }
            </Routes>
        </>
    );
}

export default RoutesNav;