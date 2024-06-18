import React from 'react';
import './Main.css';
import headerImage from './img/header-image.png';
import RectangleComponent from './RectangleComponent';
// import BuildingForSection from './BuildingForSection';
// import MarqueeSection from './MarqueeSection';

const Main = () => {
  return (
    <main className="main container pt-0">
      <section className="info text-center">
        <img src={headerImage} alt="Header" className="header-image img-fluid mb-3" />
        <p className="lead">
          Hey Fashion Fam, <br />
          Is old always gold? <br />
          Not when it comes to technology <br />
          New is - better, faster & more efficient
        </p>
        <div className="email-form d-flex justify-content-center align-items-center shadow p-0 mb-3">
          <input type="email" placeholder="Email address" className="form-control mr-2" />
          <button className="btn btn-danger">Get early access</button>
        </div>
        <RectangleComponent />
      </section>
    </main>
  );
};

export default Main;
