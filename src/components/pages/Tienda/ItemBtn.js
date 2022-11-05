import React from 'react'
import ModalPrueba from './Modal';
import { useState } from 'react';

export default function ItemBtn({ prod }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <img src="/img/plusred.svg" alt="" />
            </button>
            <ModalPrueba open={isOpen} onClose={() => { setIsOpen(false) }} stock={prod.stock} initial={0} prod={prod}>
                <h2>{prod.title} </h2>
                <h3>${prod.price}</h3>
                <div className='InfoDescripcion'>
                    <p>Ingredientes: {prod.ingredients}</p>
                    <p>Descripción: {prod.info}</p>
                </div>
            </ModalPrueba>
        </>
    )
}
