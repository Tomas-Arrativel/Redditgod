import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';
import { Form } from 'react-router-dom';

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
        <Form action='/search' className='nav__input'>
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
        </Form>
      </div>
    </nav>
  );
};

export default Navbar;
