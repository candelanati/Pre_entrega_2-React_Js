import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    
    return (
        <nav>
            <ul className="navClass">
                <Filtro>claro</Filtro>
                <Filtro>oscuro</Filtro>
            </ul>
        </nav>
    );
}

function Filtro ({children}){
    return(
        <li>
            <Link to={`/filtrados/${children}`}>{children}</Link>
        </li>
    )
}

export default NavBar