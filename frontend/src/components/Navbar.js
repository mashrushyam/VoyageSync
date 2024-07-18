import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/VoyageSync.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='' className='logo-img' />
        <div className='logo-text'>
          <span className='voyage'>Voyage</span>
          <span className='sync'>Sync</span>
        </div>
      </div>
      <ul className='navbar-links'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/publish'>Publish</Link></li>
        <li><Link to='/book'>Book</Link></li>
        <li><Link to='/history'>History</Link></li>
        <li><Link to='/profile'>Profiles</Link></li>
      </ul>
      <Link to='/register'><button className='logout-btn'>Logout</button></Link>
    </nav>
  );
};

export default Navbar;
