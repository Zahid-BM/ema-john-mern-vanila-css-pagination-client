import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products); /* aim of this state is bring data from savedCart data from local storage */
    // page navigate using useNavigate hook
    /*  const navigate = useNavigate(); */

    const deleteButton = orderedItem => {
        /* to delete ordered item on click */
        const restItems = cart.filter(item => item.id !== orderedItem.id);
        setProducts(restItems);
        removeFromDb(orderedItem.id);
    }



    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(orderedItem => <OrderReview key={orderedItem.id} orderedItem={orderedItem} deleteButton={deleteButton}></OrderReview>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <button onClick={() => navigate('/inventory')}>Proceed Checkout</button> */}

                    <Link to='/shipment'>
                        <button>Proceed Shipment</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;