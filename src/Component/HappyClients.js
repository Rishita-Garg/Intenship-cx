import React from 'react';
import './HappyClients.css';

const HappyClients = () => {
  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-people-roof"></i>
              </div>
              <h2>10K+</h2>
              <h3>Happy clients</h3>
              <p>
              More than 10,000 satisfied clients have availed of our services and solutions
              </p>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-truck"></i>
              </div>
              <h2>50K+</h2>
              <h3>Shipments delivered</h3>
              <p>
              We have delivered 50,000+ shipments to various destinations
              </p>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-map-location"></i>
              </div>
              <h2>28K+</h2>
              <h3>Served Pincodes</h3>
              <p>
              Our services cover more than 28,000 pincodes across the country
              </p>
            </div>
          </div>
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h2>24/7</h2>
              <h3>Support</h3>
              <p>
                We offer 24/7 exceptional customer support assistance for all clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
