import React from 'react';
import './RectangleComponent.css';
import buttonRed from './img/button3.png';
import buttonYellow from './img/button1.png';
import buttonGreen from './img/button2.png';

const RectangleComponent = () => {
  return (
    <div className="rectangle">
      <div className="window-header">
        <div className="button-group">
          <img src={buttonRed} alt="Red Button" className="window-button" />
          <img src={buttonYellow} alt="Yellow Button" className="window-button" />
          <img src={buttonGreen} alt="Green Button" className="window-button" />
        </div>
      </div>
      <div className="division-line"></div>
      <div className="content">
        <h2>Hey Fashion Fam,</h2>
        <p>
          Is old always gold?<br />
          Not when it comes to technology<br />
          New is - better, faster & more efficient <br />
          Let's unite to switch gears and bring a technology revolution
in fashion so you can level up that career | business you are
        </p>
        
      </div>
    </div>
  );
};

export default RectangleComponent;
