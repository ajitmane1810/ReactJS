import './Header.css';
import logo from'../assets/logo.png'
function Header() {
    return (
        <div id="header">
            <ul className="navbar">
            <img src={logo}></img>

            <a href="#banner"><li>Home</li></a>
            <a href="#features"><li>Features</li></a>
            <a href="#services"><li>Services</li></a>
            <a href="#testimonials"><li>Testimonials</li></a>
            <a href="#contact"><li>Contact</li></a>      
                
            </ul>
        </div>
    );
}

export default Header;