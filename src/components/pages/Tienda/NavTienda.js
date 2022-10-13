import React from 'react'
import { Link } from 'react-router-dom'

export default function NavTienda() {
    return (
        <div className='NavTienda'>
            <Link to='/tienda'>
                TODO
            </Link>
            <Link to="/tienda/jugo">
                JUGOS
            </Link>
            <Link to="/tienda/agua">
                AGUAS
            </Link>
            <Link to="/tienda/pack">
                PACKS
            </Link>
        </div>
    )
}
