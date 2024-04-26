import { useState } from 'react';
import {LOGO_CDN} from '../utils/constants'
const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_CDN} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login-btn' 
                    onClick ={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")} > {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;