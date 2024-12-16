import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className='navbar'>
          <Link to='/' className='navbar-title'>
        <h2>BOOK KEEPING WEBSITE</h2>
      </Link>
        <button className='menu-button' onClick={toggleDrawer}>
        ☰
      </button>
        <ul className={`navbar-menu ${isDrawerOpen ? 'open' : ''}`}>
        <li>
          <Link  to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/bookForm'>
            Add Book
          </Link>
        </li>
        <li>
          <Link to='/books'>
            Books
          </Link>
        </li>
            
        </ul>
       
    </div>
  )
}

export default Navbar