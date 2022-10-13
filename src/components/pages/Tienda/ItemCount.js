import { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);


    const add = () => {
        count < props.stock && setCount(count + 1);
    };

    const substract = () => {
        count > props.initial && setCount(count - 1);
    };

    return (
        <div className='countContainer'>
            <div className='countBtn'>
                <button disabled={count === props.stock} onClick={add}>
                    +
                </button>
                <p>
                    {count}
                </p>
                <button disabled={count === props.initial} onClick={substract}>
                    -
                </button>
            </div>
            <button className='addToCart'>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount;