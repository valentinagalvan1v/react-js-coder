import { useState, useEffect } from 'react';

const ItemCount = ({ initial, stock, addProdToCart }) => {

    const [count, setCount] = useState(initial);

    const add = () => {
        count < stock && setCount(count + 1);
    };
    const substract = () => {
        count > initial && setCount(count - 1);
    };

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    return (
        <div className='countContainer'>
            <div className='countBtn'>
                <button disabled={count === stock} onClick={add}>
                    <img src="/img/plus.svg" alt="" />
                </button>
                <p>
                    {count}
                </p>
                <button disabled={count === initial} onClick={substract}>
                    <img src="/img/minus.svg" alt="" />
                </button>
            </div>
            <button onClick={() => { addProdToCart(count) }} className='addToCart'>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount;