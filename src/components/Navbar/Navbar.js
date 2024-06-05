import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='nav__container'>
        <div className='nav__logo'>
          <img src='redditgod-logo.png' alt='Logo' />
          <h1>
            Reddit<span>God</span>
          </h1>
        </div>
        <form action='/search' className='nav__input'>
          <input
            id='q'
            aria-label='Search contacts'
            placeholder='Search'
            type='search'
            name='q'
          />
          <button>
            <FaSearch color='#ecf4ff' />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
