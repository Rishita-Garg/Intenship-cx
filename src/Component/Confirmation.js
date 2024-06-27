import React from 'react';
import './Confirmation.css';
const SuccessMessage = () => {
  return (
    <div className="funds-success-message-container">
      <div className="funds-checkmark-text-container">
        <div className="funds-checkmark-container">
          <svg className="funds-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="funds-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="funds-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg> 
          <div className="funds-display-on-ie">
            <svg className="funds-ie-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="funds-ie-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="funds-ie-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg> 
          </div>
        </div>
        <h1 className="funds-success-done-text">Booking Successful</h1>
      </div>
      <div className="funds-success-message">
        <p>"Get ready for a hassle-free pickup experience! Our pickup executive will reach out to you soon to arrange the collection of your luggage"</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
