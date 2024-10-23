import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [logBtn , setLogBtn] = useState('LogIn');
    const [btnColor, setBtnColor] = useState('log-in');
    const onlineStatus = useOnlineStatus();
    
    return(
        <div className='header'>
            {/* Logo */}
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            {/* Nav Items */}
            <div className='nav-container'>
                <ul className='nav-items'> 
                    <li>
                    Online {onlineStatus ?  "🟢" :  "🔴"}
                    </li>
                    <li>
                        <Link to="/" > Home </Link>
                    </li>
                    <li>
                       <Link to="/about"> About Us </Link>
                    </li>
                    <li>
                       <Link to="/contact"> Contact Us </Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <Link to="/grocery" > Grocery </Link>
                    </li>
                    <li>
                        <button 
                        className= {`login-btn 
                            ${btnColor} `}
                        onClick={()=> 
                            logBtn == 'LogIn' ? setLogBtn('LogOut') : setLogBtn('LogIn')
                         }
                        > 
                            {logBtn}
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header;