import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { products } from '../../Products'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {

    // sin promesa
    // setTimeout(() => {
    //     setItems(products)
    // },2000)

    const traerProductos = () => {

        return new Promise((response, reject) => {
            setTimeout(() => {
                response(products)
            }, 1000);

        });

    };


    traerProductos()
        .then((response) => {
            setItems(response);
        })
        .catch((error) => {
            console.log(error);
        });

  }, []);


  return (
      <div className="itemListContainer">
          <ItemList items={items} />
      </div>
  );
};

export default ItemListContainer;



