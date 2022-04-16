import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [userName, setUserName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [user] = useAuthState(auth);
   

    const handleUserNameOnBlur = event => {
        setUserName(event.target.value)
    };
  
    const handleNumberOnBlur = event => {
        setUserName(event.target.value)
    };
    const handleAddressOnBlur = event => {
        setUserName(event.target.value)
    };


    const handleCreateUser = event => {
        event.preventDefault();
        const shipingInfo = { userName, email, number, address };

    };
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipment</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleUserNameOnBlur} type="text" name="name" id="" required />
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                        <label htmlFor="number">Phone Number</label>
                        <input onBlur={handleNumberOnBlur} type="number" name="number" id="" required />
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressOnBlur} type="text" name="address" id="" required />
                        <p style={{ color: 'red' }}></p>
                    </div>
                    <input style={{margin: '30px 0'}} className='form-submit' type="submit" value={'Proceed Shipping'} />
                </form>

            </div>

        </div>
    );
};

export default Shipment;