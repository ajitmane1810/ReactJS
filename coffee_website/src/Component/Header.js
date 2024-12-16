import './Header.css';
import coffee from '../assets/cofffee_image.png';
function Header() {
    return(
        <div className='header'>
            <div className='header-text'>
                <h1 id='title-1'>Fuel Your Passion</h1>
                <h1 id='title-2'>Discover the Magic in Every Cup</h1>
                <p>Welcome to our coffee paradise, where every bean tells a story and every cup sparks.</p>
                <button id='btn-1'>Order Online</button>
                <button id='btn-2'>Book A Table</button>
            </div>
            <div className='header-img'>
                <img src={coffee} alt='not found'/>
            </div>
        </div>
    );
}

export default Header;

