import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='nav__logo'>
        <img src='redditgod-logo.png' alt='Logo' />
        <h1>
          Reddit<span>God</span>
        </h1>
      </div>
      <div className='nav__input'>
        <input type='text' placeholder='Search...' />
        <button className=''>
          <FaSearch color='#ecf4ff' />
        </button>
      </div>
      <button className='nav__menu'>
        <IoMdMenu color='#ecf4ff' size={23} />
      </button>
    </nav>
  );
};

export default Navbar;
