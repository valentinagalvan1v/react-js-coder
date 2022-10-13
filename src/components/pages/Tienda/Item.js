import React from 'react'
import ItemBtn from './ItemBtn';
import { useState } from 'react';
import ModalPrueba from './Modal';

const Item = ({ prod }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='ItemBlock'>
      <img src={prod.img} alt={prod.title} />
      <ItemBtn prod={prod} />
      <ModalPrueba open={isOpen} onClose={() => { setIsOpen(false) }}>
        <div>{prod.title} {prod.price}</div>
      </ModalPrueba>
    </div>
  )
}

export default Item;