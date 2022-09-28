import React from "react";
import CartWidget from "./CartWidget.js";


export default function NavBar() {
    return (
        <nav className="navBar">
            <a href="/" className="logoNavBar">JUGOS OMJ</a>
            <ul>
                <CustomLink href="/tienda">TIENDA</CustomLink>
                <CustomLink href="/proceso">PROCESO</CustomLink>
                <CustomLink href="/contacto">CONTACTO</CustomLink>
            </ul>
            <CartWidget />
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