import React from 'react';
import './Header.css';
import logo from './img/logo.png';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 pb-0 mb-0 mx-4">
      <img src={logo} alt="Logo" className="logo my-6" />
      <div className="menu ml-6">
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
