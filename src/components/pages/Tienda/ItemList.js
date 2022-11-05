import React from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';

const ItemList = ({ items }) => {

    const { category } = useParams();
    return (
        <div className="ItemList">
            {items.map((item) => {
                let component
                if (category === undefined) {
                    component =  <Item prod={item} key={item.id} />;
                } else {
                    if (category === item.category) {
                        component = <Item prod={item} key={item.id} />;
                    }
                }
                return component
            })}
        </div>
    );
};

export default ItemList;