import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(); /* aim of this state is bring data from savedCart data from local storage */
    // page navigate using useNavigate hook
    /*     const navigate = useNavigate(); */
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0); /* to change the pagination button color on clicked */
    const [itemsToShow, setItemsToShow] = useState(10); /* manage how many items will be set in the state to display */
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&items=${itemsToShow}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, itemsToShow]);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const totaldata = data.dataCount;
                const page = Math.ceil(totaldata / 10);
                setPageCount(page);
            })
    }, []);


    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct._id);
    };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number => <button onClick={() => setPage(number)} className={page === number ? 'selected-page-button' : 'page-btn'}>{number + 1}</button>)
                    }
                    Showing {itemsToShow}
                    <select onClick={(e) => { setItemsToShow(e.target.value) }}>
                        <option value="6">6</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/*    <button onClick={() => navigate('/orders')}>Order Review</button> */}

                    <Link to='/orders'>
                        <button>Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;