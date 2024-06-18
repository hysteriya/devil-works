import React from 'react';
import './RectangleComponent.css';
import buttonRed from './img/button3.png';
import buttonYellow from './img/button1.png';
import buttonGreen from './img/button2.png';

const RectangleComponent = () => {
  return (
    <div className="rectangle border rounded mt-6">
      <div className="window-header p-2 d-flex align-items-center">
        <div className="button-group d-flex">
          <img src={buttonRed} alt="Red Button" className="window-button mr-2" />
          <img src={buttonYellow} alt="Yellow Button" className="window-button mr-2" />
          <img src={buttonGreen} alt="Green Button" className="window-button" />
        </div>
      </div>
      <div className="division-line my-0"></div>
      <div className="content p-3">
        <p> Our fashion universe is still playing catch-up with old-school <br />
          networking while others are using tech to connect & find gigs <br />
          worldwide & automate tasks. <br /> <br /> </p>
        <p>
          <span className="highlight">Let's unite to switch gears and bring a technology revolution</span> <br /> 
            in fashion
           so you can level up that career | business you are <br />
        </p>
      </div>
    </div>
  );
};

export default RectangleComponent;
