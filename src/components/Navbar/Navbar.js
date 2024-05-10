import React from 'react';
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
          <img src='search-icon.png' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
