import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavTienda() {
    return (
        <nav className='NavTienda'>
            <NavLink to='/tienda' end>TODO</NavLink>
            <NavLink to="/tienda/jugo">JUGOS</NavLink>
            <NavLink to="/tienda/agua">AGUAS</NavLink>
            <NavLink to="/tienda/pack"> PACKS</NavLink>
        </nav>
    )
}
