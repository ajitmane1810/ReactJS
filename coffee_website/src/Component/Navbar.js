import "./Navbar.css";
import logo from "../assets/coffee_logo.png";

function Navbar() {
    
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="not found" />
        <h1>Coffee</h1>
      </div>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#why-us">Why Us</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
