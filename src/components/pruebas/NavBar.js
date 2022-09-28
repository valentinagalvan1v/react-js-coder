import React from "react";
import CartWidget from "./CartWidget.js";


export default function NavBar() {
    return (
        <nav className="navBar">
            <a href="/" className="logoNavBar">JUGOS OMJ</a>
            <ul>
                <Prueba href="asd1">asd1</Prueba>
                <Prueba href="asd2">asd2</Prueba>
                <Prueba href="asd3">asd3</Prueba>
                <Prueba href="asd4">asd4</Prueba>
                <CustomLink href="/tienda">TIENDA</CustomLink>
                <CustomLink href="/proceso">PROCESO</CustomLink>
                <CustomLink href="/contacto">CONTACTO</CustomLink>
            </ul>
            <CartWidget />
        </nav>
    )
}

const Prueba = (props) => {

    console.log(props.children)

    return(
        <li className="Prueba">
            <a href={props.href}>
                {props.children}
            </a>
        </li>
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