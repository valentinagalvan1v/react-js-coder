import React from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';

const ItemList = ({ items }) => {

    const { category } = useParams();

    return (
        <div className="ItemList">
            {items.map(item => {
                if (category === undefined) {
                    return <Item prod={item} key={item.id} />;
                } else {
                    if (category === item.category) {
                        return <Item prod={item} key={item.id} />;
                    }
                }
            })}
        </div>
    );
};

export default ItemList;