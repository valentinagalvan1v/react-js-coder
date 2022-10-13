import React from 'react'
import ReactDom from "react-dom"
import ItemCount from './ItemCount'

export default function ModalPrueba({ open, children, onClose, stock, initial }) {

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='ModalBackground'></div>
      <div className='Modal'>
        <button onClick={onClose}>x</button>
        {children}
        <ItemCount stock={stock} initial={0}></ItemCount>
      </div>
    </>,
    document.getElementById('portal')
  )
}
