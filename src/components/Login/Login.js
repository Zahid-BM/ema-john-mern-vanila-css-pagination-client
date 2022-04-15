import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>

            <form >
                <h2 className='form-title'>Login</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                </div>
                <input className='form-submit' type="submit" value={'Login'} />
                <p>
                    New to Ema-john? <Link className='link-navigation' to='/signup'>Create New Account</Link>
                </p>
                <div className="or-design">
                    <div className="line"><hr /></div>
                    <div className="or">or</div>
                    <div className="line"><hr /></div>
                </div>
                <button className='google-login'> <img className='google-logo' src="https://freesvg.org/img/1534129544.png" alt="" /> Continue with Google </button>
            </form>

        </div>
    );
};

export default Login;