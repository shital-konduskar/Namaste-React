import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return(
        <div className='header'>
            {/* Logo */}
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            {/* Nav Items */}
            <div className='nav-container'>
                <ul className='nav-items'> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;