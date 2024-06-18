import React from 'react';
import './MarqueeSection.css';

const MarqueeSection = () => {

  const text='JOIN THE PARTY 😍 JOIN THE PARTY 😍 JOIN THE PARTY 😍 JOIN THE PARTY 😍 JOIN THE PARTY 😍 JOIN THE PARTY 😍 JOIN THE PARTY 😍 JOIN THE PARTY 😍'
  return (
    <div className="marquee-container">
      <div className="marquee">
       <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default MarqueeSection;
