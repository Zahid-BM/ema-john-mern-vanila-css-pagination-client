import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReview.css'

const OrderReview = ({ orderedItem, deleteButton }) => {

    console.log(orderedItem);
    const { name, img, price, quantity, shipping } = orderedItem;

    return (
        <div className='order-review-container' >
            <div className='order-details-container'>
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
                <div className="info-container">
                    <h4>{name}</h4>
                    <p>Price : $ {price}</p>
                    <p><small>Quantity : {quantity}</small></p>
                    <p><small>Shipping Charge: {shipping} $</small></p>
                </div>
                
            </div>
            <div className='delete-button-container'>
                <button onClick={() => deleteButton(orderedItem)} > <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon> </button>
            </div>

        </div>
    );
};

export default OrderReview;