import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitle'>
        <span className='headerTitlesm'>React &amp; Node</span>
        <span className='headerTitlelg'>Blog</span>
      </div>
      <img
        src='https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        alt=''
        className='headerImg'
      />
    </div>
  );
};

export default Header;
