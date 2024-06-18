import React from 'react';
import './Main.css';
import headerImage from './img/header-image.png';
import RectangleComponent from './RectangleComponent';
import BuildingForSection from './BuildingForSection';
import MarqueeSection from './MarqueeSection';

const Main = () => {
  return (
    <main className="main">
      <section className="info">
        <img src={headerImage} alt="Header" className="header-image" />
        <p>Hey Fashion Fam, <br />

          Is old always gold? <br />
          Not when it comes to technology <br />
          New is - better, faster & more efficient
        </p>
        <div className="email-form">
          <input type="email" placeholder="Email address" className="email-input" />
          <button className="email-button">Get early access</button>
        </div>
        <RectangleComponent />
      </section>
      <MarqueeSection />
      <BuildingForSection />
    </main>
  );
};

export default Main;
