import React from 'react';
import './Header.css';
import logo from './img/logo.png';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
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
