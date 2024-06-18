import React from 'react';
import './Main.css';
import headerImage from './img/header-image.png';
import RectangleComponent from './RectangleComponent';
// import BuildingForSection from './BuildingForSection';
// import MarqueeSection from './MarqueeSection';

const Main = () => {
  return (
    <main className="main container pt-0 mt-0">
      <section className="info text-center">
        <img src={headerImage} alt="Header" className="header-image img-fluid mb-3" />
        <div>
        <p className="header-text">Hey Fashion Fam,</p>
        <p className="sub-text">
          Is old always gold? <br />
          Not when it comes to technology <br />
          New is - better, faster & more efficient
        </p>
        </div>
        <div className="email-form d-flex justify-content-center align-items-center shadow p-0 mb-3 mt-4">
          <input type="email" placeholder="Email address" className="form-control mr-2" />
          <button className="email-button btn btn-danger">Get early access</button>
        </div>
        <div className='mt-5'>
        <RectangleComponent />
        </div>
      </section>
    </main>
  );
};

export default Main;
