import './Footer.css';
import logo from '../src/assets/coffee_logo.png';
import { FaClock, FaFacebook, FaInstagram, FaLocationCrosshairs, FaPhone, FaTwitter } from 'react-icons/fa6';
function Footer() {
    return(
        <div className='footer' >
            <div className='logo'>
                <img src={logo}/>
                <h2>Coffee</h2>
            </div>
            <div className='links'>
                <h2>Useful Links</h2>
                <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#services'>Services</a>
                </li>
                <li>
                    <a href='#why-us'>Why Us</a>
                </li>
                <li>
                    <a href='#gallery'>Gallery</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
                
                
            </ul>
            </div>
            <div className='address'>
                <h2>Contact</h2>
                <div className='flex'>
                    <i><FaLocationCrosshairs/></i>
                    <p>Bikwell,Satara</p>
                </div>
                <div className='flex'>
                    <i><FaPhone/></i>
                    <p>+91 8080565374</p>
                </div>
                <div className='flex'>
                    <i><FaClock/></i>
                    <p>
                    Mon-Sun : 10:00 AM - 7:00 PM</p>
                </div>
            </div>
            <div className='icons'>
                <h2>Follow</h2>
                <i><FaFacebook/></i>
                <i><FaTwitter/></i>
                <i><FaInstagram/></i>
            </div>
        </div>
    );
}

export default Footer;