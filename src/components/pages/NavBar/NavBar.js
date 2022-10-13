import { NavLink } from "react-router-dom";
import React from "react";
import CartWidget from "./CartWidget.js";


export default function NavBar() {
    return (
        <nav className="navBar">
            <NavLink  to="/" className="logoNavBar" >OMJ</NavLink>
            <ul>
                <NavLink to="/tienda" >TIENDA</NavLink>
                <NavLink to="/proceso" >PROCESO</NavLink>
                <NavLink to="/contacto" >CONTACTO</NavLink>
            </ul>
            <CartWidget />
        </nav>
    )
}