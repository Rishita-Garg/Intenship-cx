import React, { useState, useEffect } from "react";
import { Paper, Text, Button, MantineProvider } from "@mantine/core";
import location from "../assets/Group 72.svg";
import arrow from "../assets/Ornament 38.svg";
import "./Cards.css";

function Cards() {
  return (
    <MantineProvider>
      <div className="cards-container">
        <Paper className="pincode-card">
          <div className="pincardtitle-container">
            <Text className="pincardtitle">Serviceable</Text>
            <Text className="pincardsubtitle">Pincodes</Text>
          </div>
          <img src={location} alt="Location Icon" className="location-icon" />
          <Text className="pincarddescription">Discover the coverage and availability of our logistics services by entering your pincode.</Text>
          <Button className="pincardbutton" onClick={() => window.location.href = '/Pincode'}>Pincode Serviceability</Button>
        </Paper>

        <Paper className="rate-calc-card">
          <div className="ratecardtitle-container">
            <Text className="ratecardtitle" color="white">Shipping Rate</Text>
            <Text className="ratecardsubtitle" color="white">Calculator</Text>
          </div>
          <Text className="ratecarddescription">Estimate shipping costs and delivery charges effortlessly with our user-friendly rate calculator tool.</Text>
          <Button className="ratecardbutton"onClick={() => window.location.href = '/RateCalculator'} color="white">Rate Calculator</Button>
        </Paper>
        <img src={arrow} className="arrow-icon" />
      </div>
    </MantineProvider>
  );
}

export default Cards;
