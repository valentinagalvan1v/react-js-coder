import React from 'react';
import Item from './Item';

const ItemListDestacado = ({ items }) => {

    return (
        <div className="ItemListDestacado">
            {items.map(item => {
                let componente
                if (item.destacado === true) {
                    componente = <Item prod={item} key={item.id} />;
                }
                return componente
            })}
        </div>
    );
};

export default ItemListDestacado;