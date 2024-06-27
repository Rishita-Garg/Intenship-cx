import React from "react";
import "./Home.css";

import HeroSection from "./HeroSection.js";
import Cards from "./Cards.js";
import HappyClients from ".//HappyClients.js";
import ClientsSection from "./ClientsSection.js";
import Testimonial from "./Testimonial.js";
import Subscription from "./lancon.js";
import Journey from "./Journey.js";


const Home = () => {
  return (
      <div className="landing-page2">
        <HeroSection />
        <Cards />
        <ClientsSection />
        <HappyClients />
        <Subscription />
        <Testimonial />
      </div>
  );
};

export default Home;
