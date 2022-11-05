import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import ItemListDestacado from './ItemListDestacado';
import BarLoader from "react-spinners/BarLoader";
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../../services/firebaseConfig';

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const prodCollection = collection(database, 'products')
        getDocs(prodCollection)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    }
                })
                setItems(products);
            })
            .catch((error) => {
            })
            .finally(() => {
                setLoader(false);
            });
        return () => setLoader(true);
    }, []);

    if (loader === true) {
        return <div className='Loader'>
            <BarLoader />
        </div>
    }

    return (
        <div className="itemListContainer">
            {props.page === 'home' && <ItemListDestacado items={items} />}
            {props.page === 'tienda' && <ItemList items={items} />}
        </div>
    )

};

export default ItemListContainer;


