import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar.js";
import Footer from "./Component/Footer.js";
import Contact from "./Component/Contact.js";
import Home from "./Component/Home.js";
import About from "./Component/About.js";
import Media from "./Component/Media.js";
import Pincode from "./Component/Pincode.js";
import Tracking from "./Component/Tracking.js";
import Booking from "./Component/Booking.js";
import Otp from "./Component/Otp.js";
import SuccessMessage from"./Component/Confirmation.js";
import RateCalculator from "./Component/RateCal.js"
function App(){
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Media" component={Media} />
          <Route path="/Tracking" component={Tracking} />
          <Route path="/Pincode" component={Pincode} />
          <Route path="/Booking" component={Booking} />
          <Route path="/Otp" component={Otp} />
          <Route path="/Confirmation" component={SuccessMessage} />
          <Route path="/RateCalculator" component={RateCalculator} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
