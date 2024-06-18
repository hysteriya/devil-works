import React from 'react';
import './RectangleComponent.css';
import buttonRed from './img/button3.png';
import buttonYellow from './img/button1.png';
import buttonGreen from './img/button2.png';
//import ellipsePink from './img/ellipsePink.png';  // Import the background image

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
      <div className="content">
        <p>
          Our fashion universe is still playing catch-up with old-school networking while others are using tech to connect & find gigs worldwide & automate tasks.
        </p>
        <p className="highlight-container">
          <span className="highlight">Let's unite to switch gears and bring a technology revolution in fashion</span> so you can level up that career | business you are
        </p>
      </div>
    </div>
  );
};

export default RectangleComponent;
