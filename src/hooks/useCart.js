import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart(); /* saved item in the local storage by id */
        const savedcart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedcart.push(addedProduct);
            };
            setCart(savedcart);
        };
    }, [products]);
    return [cart, setCart];
};
export default useCart;