import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);



    const handleEmailOnBlur = event => {
        setEmail(event.target.value);
        console.log(email)
    };
    const handlePassOnBlur = event => {
        setPassword(event.target.value);
        console.log(email)
    };
    const handleConfirmPassOnBlur = event => {
        setConfirmPassword(event.target.value);
        console.log(email)
    };

    if (user) {
        navigate('/')
    };
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('password did not match')
            return;
        }

        if (password.length < 6) {
            setErrorMessage('password must be at least 6 characters')
        }
        createUserWithEmailAndPassword(email, password);
    };




    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Signup</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnBlur} type="email" name="email" id="" required />
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassOnBlur} type="password" name="password" id="" required />
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPassOnBlur} type="password" name="confirmPassword" id="" required />
                        <p style={{ color: 'red' }}>{errorMessage}</p>
                    </div>
                    <input className='form-submit' type="submit" value={'Login'} />
                </form>
                <p>
                    Already have an account ? <Link className='link-navigation' to='/login'>Login</Link>
                </p>
                <div className="or-design">
                    <div className="line"><hr /></div>
                    <div className="or">or</div>
                    <div className="line"><hr /></div>
                </div>
                <button className='google-login'> <img className='google-logo' src="https://freesvg.org/img/1534129544.png" alt="" /> Continue with Google </button>
            </div>

        </div>
    );
};

export default Signup;