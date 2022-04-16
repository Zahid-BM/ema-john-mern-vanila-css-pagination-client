import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(email)
    };
    const handPAsswordBlur = event => {
        setPassword(event.target.value);
        console.log(password)

    };

    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleLogin} >
                    <h2 className='form-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        <label htmlFor="password">Password</label>
                        <input onBlur={handPAsswordBlur} type="password" name="password" id="" />
                        <p style={{ color: 'red' }}>{error?.message}</p>
                    </div>
                    <input className='form-submit' type="submit" value={'Login'} />
                </form>
                <p>
                    New to Ema-john? <Link className='link-navigation' to='/signup'>Create New Account</Link>
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

export default Login;