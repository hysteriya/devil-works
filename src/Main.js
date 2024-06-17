import React from 'react';
import './Main.css';
import headerImage from './img/header-image.png';
import RectangleComponent from './RectangleComponent';

const Main = () => {
  return (
    <main className="main">
      <section className="info">
        <img src={headerImage} alt="Header" className="header-image" />
        <p>Hey Fashion Fam,

          Is old always gold?
          Not when it comes to technology
          New is - better, faster & more efficient
        </p>
        <div className="email-form">
          <input type="email" placeholder="Email address" className="email-input" />
          <button className="email-button">Get early access</button>
        </div>
        <RectangleComponent />
      </section>
    </main>
  );
};

export default Main;
