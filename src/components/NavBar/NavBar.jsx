import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
    function HandleClick (opcion){
        console.log("click en: "+opcion)
    }
    return (
        <nav>
            <ul className="navClass">
                <Filtro HandleClick={HandleClick}>claro</Filtro>
                <Filtro HandleClick={HandleClick}>oscuro</Filtro>
            </ul>
        </nav>
    );
}

function Filtro ({children, HandleClick}){
    return(
        <li>
            <button onClick={()=>HandleClick(children)}>{children}</button>
        </li>
    )
}

export default NavBar