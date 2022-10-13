import React from 'react'
import ModalPrueba from './Modal';
import { useState } from 'react';


export default function ItemBtn({ prod }) {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <button onClick={() => setIsOpen(true)}>+</button>
            <ModalPrueba open={isOpen} onClose={() => { setIsOpen(false) }} stock={prod.stock} initial={0}>
                <div>Nombre: {prod.title} </div>
                <div>${prod.price}</div>
                <div>Ingredientes: {prod.ingredients}</div>
                <div>Descripción: {prod.info}</div>
            </ModalPrueba>
        </>
    )
}
