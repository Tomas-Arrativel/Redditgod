import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoMdMenu, IoIosClose } from 'react-icons/io';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className='nav__container'>
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
        <button onClick={handleOnClick} className='nav__menu'>
          {!isOpen ? (
            <IoMdMenu color='#ecf4ff' size={23} />
          ) : (
            <IoIosClose color='#ecf4ff' size={23} />
          )}
        </button>
      </div>

      <div className={`nav__menu-options ${isOpen ? 'open' : ''}`}></div>
    </nav>
  );
};

export default Navbar;
