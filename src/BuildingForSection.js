import React from 'react';
import './BuildingForSection.css';

import bus1 from './img/bus/brand.png';
import bus2 from './img/bus/multiDesigner.png';
import bus3 from './img/bus/productionHouse.png';
import bus4 from './img/bus/manufacturing.png';
import bus5 from './img/bus/institutes.png';
import bus6 from './img/bus/events.png';
import bus7 from './img/bus/blogs.png';
import bus8 from './img/bus/nonProfit.png';
import bus9 from './img/bus/fashion.png';
import bus10 from './img/bus/conglomerates.png';
import bus11 from './img/bus/agencies.png';

import ind1 from './img/ind/blogger.png';
import ind2 from './img/ind/designer.png';
import ind3 from './img/ind/model.png';
import ind4 from './img/ind/photography.png';
import ind5 from './img/ind/communication.png';
import ind6 from './img/ind/multimedia.png';
import ind7 from './img/ind/merchandiser.png';
import ind8 from './img/ind/artists.png';
import ind9 from './img/ind/makeupArtist.png';
import ind10 from './img/ind/writer.png';
import ind11 from './img/ind/stylist.png';

const BuildingForSection = () => {
  return (
    <div className="text-center my-5">
      <div className='text-left'>
      <h2 className="font-weight-bold">Who are we building for?</h2>
      </div>
      <div className="d-flex justify-content-around mt-4">
        <div className="businesses">
          <h3 className="font-weight-bold">Businesses</h3>
          <div className="d-flex flex-wrap justify-content-center">
            <img src={bus1} alt="Brand" className="img-thumbnail m-2" />
            <img src={bus2} alt="Multi Designer" className="img-thumbnail m-2" />
            <img src={bus3} alt="Production House" className="img-thumbnail m-2" />
            <img src={bus4} alt="Manufacturing & Export" className="img-thumbnail m-2" />
            <img src={bus5} alt="Institutes and Academies" className="img-thumbnail m-2" />
            <img src={bus6} alt="Events" className="img-thumbnail m-2" />
            <img src={bus7} alt="Blogs and Publications" className="img-thumbnail m-2" />
            <img src={bus8} alt="Non Profit and Councils" className="img-thumbnail m-2" />
            <img src={bus9} alt="Fashion and Consultancy" className="img-thumbnail m-2" />
            <img src={bus10} alt="Conglomerates" className="img-thumbnail m-2" />
            <img src={bus11} alt="Agencies" className="img-thumbnail m-2" />
          </div>
        </div>
        <div className="individuals">
          <h3 className="font-weight-bold">Individuals</h3>
          <div className="d-flex flex-wrap justify-content-center">
            <img src={ind1} alt="Blogger & Influencer" className="img-thumbnail m-2" />
            <img src={ind2} alt="Designer" className="img-thumbnail m-2" />
            <img src={ind3} alt="Model" className="img-thumbnail m-2" />
            <img src={ind4} alt="Photography & Film Making" className="img-thumbnail m-2" />
            <img src={ind5} alt="Communication Designer" className="img-thumbnail m-2" />
            <img src={ind6} alt="Multimedia Designer" className="img-thumbnail m-2" />
            <img src={ind7} alt="Merchandiser" className="img-thumbnail m-2" />
            <img src={ind8} alt="Artists" className="img-thumbnail m-2" />
            <img src={ind9} alt="Makeup Artist & Hair Stylist" className="img-thumbnail m-2" />
            <img src={ind10} alt="Writer and Journalists" className="img-thumbnail m-2" />
            <img src={ind11} alt="Stylist" className="img-thumbnail m-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingForSection;
