import { createContext, useState } from 'react';

export const ContextCart = createContext();

const Provider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (prod, cantidad) => {
        const producto = { ...prod, cantidad };
        if (AlreadyInCart(producto.id)) {
            addProd(producto)
        } else {
            setCart([...cart, producto]);
        }
    };

    const addProd = (addedProduct) => {
        const updatedCart = cart.map((cartProduct) => {
            if (cartProduct.id === addedProduct.id) {
                const updatedProduct = {
                    ...cartProduct,
                    cantidad: addedProduct.cantidad,
                };
                return updatedProduct
            } else {
                return cartProduct;
            }
        })
        setCart(updatedCart);
    }

    const CartQuantityModifier = (prodId, action)=>{
        const updatedCart = cart.map((product)=>{
            if(product.id === prodId){
                let quantity = product.cantidad
                if(action === 'plus' && product.cantidad < product.stock){
                    quantity = product.cantidad + 1
                }else if(action === 'minus'){
                    product.cantidad > 0 && product.cantidad <= product.stock ?  quantity = product.cantidad - 1 : quantity = 0
                }
                const updatedProduct = {
                    ...product,
                    cantidad: quantity
                }
                return updatedProduct
            }else{
                return product
            }
        })
        setCart(updatedCart)
    }

    const AlreadyInCart = (id) => cart.some((prod) => prod.id === id);

    const deleteAll = () => setCart([]);

    const deleteOne = (id) => {
        const filteredProducts = cart.filter((prod) => prod.id !== id)
        setCart(filteredProducts);
    }

    const totalUnits = () => {
        let count = 0
        cart.forEach((prod) => {
            count = count + prod.cantidad
        })
        return count
    }

    const totalPrice = () => {
        let price = 0
        const cartCopy = [...cart]
        cartCopy.forEach((prod) => {
            price = price + prod.price * prod.cantidad
        })
        return price
    }

    return (
        <ContextCart.Provider value={{ cart, setCart, addToCart, deleteAll, deleteOne, totalUnits, totalPrice, CartQuantityModifier }}>
            {children}
        </ContextCart.Provider>
    )
}

export default Provider;