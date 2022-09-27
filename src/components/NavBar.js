import React, { Children } from "react";
import CartWidget from "./CartWidget.js";
import styles from "../styles/styles.css"


export default function NavBar() {
    return (
        <nav className="navBar">
            <a href="/" className="logoNavBar">LOGO</a>
            <ul>
                <CustomLink href="/tienda">TIENDA</CustomLink>
                <CustomLink href="/proceso">PROCESO</CustomLink>
                <CustomLink href="/contacto">CONTACTO</CustomLink>
            </ul>
            <h2>CARRITO</h2>
        </nav>
    )
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname

    return(
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}> {children}</a>
        </li>
    )
}