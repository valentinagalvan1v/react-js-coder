import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextCart } from "../../../contexts/ContextCart";

export default function CartWidget() {
    const { totalUnits } = useContext(ContextCart)

    return (
        <>
            <div>
                <Link to='/cart'>
                    <img src="img/carrito.svg" className="CartWidget" alt="" />
                    {totalUnits() === 0 ? null : <p className="CantidadCarrito">{totalUnits()}</p>}
                </Link>
            </div>
        </>
    )
}