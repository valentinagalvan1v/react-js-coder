import React, { useState } from 'react'
import ReactDom from "react-dom"
import ItemCount from './ItemCount'
import { useContext } from 'react';
import { ContextCart } from '../../../contexts/ContextCart';
import { Link } from 'react-router-dom';

export default function ModalPrueba({ open, children, onClose, stock, prod }) {

  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(ContextCart);

  const addProdToCart = (numero) => {
    if (numero > 0) {
      addToCart(prod, numero);
      setAdded(true);
    } else {
      alert('debe ingresar al menos un producto')
    }
  }

  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div className='ModalBackground'></div>

      <div className='Modal'>

        <button onClick={onClose} className='ModalBtnX'>
          <img src="/img/cross.svg" alt="" />
        </button>

        <div className='InfoModal'>
          {children}
        </div>
        
        <div className='CounterAndLink'>
          <ItemCount stock={stock} initial={0} addProdToCart={addProdToCart} prod={prod}></ItemCount>
          {
            added && <Link to={'/cart'} > Ir al carrito</Link>
          }
        </div>

      </div>
    </>,
    document.getElementById('portal')
  )
}
