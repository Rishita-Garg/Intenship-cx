// src/TrackOrder.js
import React, { useState, useEffect, useRef } from "react";
import "./Tracking.css";
import timg from "../assets/timg.mp4";


const formatDate = (dateString) => {
  if (!dateString || isNaN(new Date(dateString).getTime())) {
    return "Not Yet Updated";
  }
  const options = { month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-UK", options);
};




const getStatusText = (status) => {
  switch (status) {
    case "DELIVERED":
      return "DELIVERED";
    case "PICKED_UP":
      return "PICKED UP"
    case "MANIFESTED":
      return "Placed";
    case "REACH_DESTINATION":
      return "REACHED DESTINATION CITY";
    case "UNDEL_REATTEMPT":
      return "IN-TRANSIT";
    case "LEFT_ORIGIN":
      return "IN-TRANSIT";
    case "OFD":
      return "OUT FOR DELIVERY";
    default:
      return status;
  }
};

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingDetails, setTrackingDetails] = useState(null);
  const [error, setError] = useState(null);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [progressBarClass, setProgressBarClass] = useState("");
  const resultsRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumber = urlParams.get("trackingNumber");
    if (trackingNumber) {
      handleTrackOrder(trackingNumber);
      setTrackingNumber(trackingNumber);
    }
  }, []);

  useEffect(() => {
    if (trackingDetails) {
      updateProgressBar(trackingDetails.status);
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [trackingDetails]);

  const updateProgressBar = (status) => {
    switch (status) {
      case "MANIFESTED":
      case "PICKED_UP":
        setProgressBarClass("manifested");
        break;
      case "REACH_DESTINATION":
      case "UNDEL_REATTEMPT":
      case "LEFT_ORIGIN":
        setProgressBarClass("left-origin");
        break;
      case "OFD":
        setProgressBarClass("out-of-delivery");
        break;
      case "DELIVERED":
        setProgressBarClass("delivered");
        break;
      default:
        setProgressBarClass("can");
        break;
    }
  };

  const handleTrackOrder = (trackingNumber) => {
    setShowProgressBar(true);
    fetch(`https://btob.api.delhivery.com/v2/track/${trackingNumber}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          setError("Please enter a valid tracking number.");
          setTrackingDetails(null);
        } else {
          setTrackingDetails(data);
          setError(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching tracking details:", error);
        setError("Error fetching tracking details. Please try again.");
        setTrackingDetails(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTrackOrder(trackingNumber);
  };


  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  

  return (
    <div className="tracking-container">
      <div className="timage-container">
        <h1 className="tadd">Welcome To Campus Express Tracking Page</h1>
        <video src={timg} className="independent-image" autoPlay muted loop>
        </video>
      </div>
      <div className="ttext-container">
        <form onSubmit={handleSubmit}>
          <div className="tbox-container">
            <div className="tbox-line"></div>
            <h2 className="tmain-heading gradient-text">
              TRACK YOUR ORDER NOW
            </h2>
            <p className="tsub-heading">
              Your Shortcut to Instant Shipment Updates!
            </p>
            <h4 className="tbox-subheading">LRN Number</h4>
            <input
              type="text"
              className="tracking-input"
              style={{
                textAlign: "center",
              }}
              placeholder=" Enter Your 9 Digit LRN Number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <button className="track-button" type="submit">
              TRACK ORDER
            </button>
            {/*  here make it link or href tags if needed */}
          </div>
        </form>
        {error && <p className="error-message">{error}</p>}
        {showProgressBar && trackingDetails && (
          <div className="tracking-details" ref={resultsRef}>
            <h3>Tracking Details:</h3>
            <div className="wrapper">
              <div className="margin-area">
                <div className={`dotone ${progressBarClass}`}>1</div>
                <div className={`dottwo ${progressBarClass}`}>2</div>
                <div className={`dotthree ${progressBarClass}`}>3</div>
                <div className={`dotfour ${progressBarClass}`}>4</div>
                <div className={`progress-barfirst ${progressBarClass}`}></div>
                <div className={`progress-barsecond ${progressBarClass}`}></div>
                <div className={`progress-barthird ${progressBarClass}`}></div>
                <div className="message message-1">Picked up</div>
                <div className="message message-2">In-Transit</div>
                <div className="message message-3">Out for delivery</div>
                <div className="message message-4">Delivered</div>
              </div>
            </div>
            <div className="del-status">
      <div className="arrival-info">
        {trackingDetails.status === "DELIVERED" ? (
          <div className="arrival-text">Delivered on</div>
        ) : (
          <div className="arrival-text">Arriving on</div>
        )}
      </div>
      <div className="status">
        <div className="status-text">
          {getStatusText(trackingDetails.status)}
        </div>
      </div>
      <div className="estimated-date">
        {formatDate(trackingDetails.estimated_date)}
      </div>
      
      <div className="more-details" onClick={toggleDetails}>
        More details <span className={`arrow ${isExpanded ? 'up' : 'down'}`}></span>
      </div>

      {isExpanded && (
        <table className="extra-details">
          <tbody>
            <tr>
              <td className="detail-label">Package Current Location</td>
              <td>{trackingDetails.location}</td>
            </tr>
            <tr>
              <td className="detail-label">Last Updated on</td>
              <td>{formatDate(trackingDetails.timestamp)}</td>
            </tr>
            <tr>
              <td className="detail-label">Origin City</td>
              <td>{trackingDetails.origin_city}</td>
            </tr>
            <tr>
              <td className="detail-label">Destination City</td>
              <td>{trackingDetails.destination_city}</td>
            </tr>
            <tr>
              <td className="detail-label">Pickup Date</td>
              <td>{formatDate(trackingDetails.pickup_date)}</td>
            </tr>
            <tr>
              <td className="detail-label">No.of luggage</td>
              <td>{trackingDetails.count}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
