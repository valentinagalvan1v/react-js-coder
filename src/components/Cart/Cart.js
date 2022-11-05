import { useContext } from 'react';
import { ContextCart } from '../../contexts/ContextCart.js'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, deleteAll, deleteOne, totalPrice, CartQuantityModifier } = useContext(ContextCart);
     if (cart.length === 0) {
        return (
            <div className='EmptyCart'>
                <h1>Aun no tienes nada en tu carrito :(</h1>
                <Link to={'/tienda'}>Ir a la tienda</Link>
            </div>
        )
    }

    return (
        <div className='CartContainer'>
            <h1>Carrito</h1>
            {cart.map((prod) => (
                <div key={prod.id} className='CartList'>
                    <img src={prod.img} alt={prod.title} />
                    <div className='CartItemDetail'>
                        <h2>{prod.title}</h2>
                        <p>$ {prod.price}</p>
                        <div className='CartQuantityBox'>
                            <button onClick={() => CartQuantityModifier(prod.id, 'minus')}>
                                <img src="/img/minusred.svg" alt="" />
                            </button>
                            <p>Cantidad: {prod.cantidad}</p>
                            <button onClick={() => CartQuantityModifier(prod.id, 'plus')}>
                                <img src="/img/plusred.svg" alt="" />
                            </button>
                        </div>
                        <p>Subtotal: ${prod.price * prod.cantidad}</p>
                        <button onClick={() => deleteOne(prod.id)}>
                            <img src="/img/crossred.svg" alt="" />
                        </button>
                    </div>

                </div>
            ))}
            <div className='CartTotal'>
                <h2>Total: ${totalPrice()}</h2>
                <button onClick={deleteAll}>Vaciar carrito</button>
                <Link to={'/checkout'}>Checkout</Link>
            </div>

        </div>
    );
};

export default Cart;