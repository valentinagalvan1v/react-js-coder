import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='MenuFooter'>
        <h3>Quick Menu</h3>
        <Link to={"/tienda"}>Tienda</Link>
        <Link to={"/proceso"}>Proceso</Link>
        <Link to={"/contacto"}>Contacto</Link>
      </div>
      <div className='InfoFooter'>
        <h3>Info</h3>
        <p>Paysandú | Uruguay</p> <br />
        <p> +598 959595</p>
      </div>
      <div className='SocialFooter'>
        <h3>Social</h3>
        <Link>Instagram</Link>
        <Link>Facebook</Link>
        <Link>Twitter</Link>
      </div>
    </div>
  )
}
