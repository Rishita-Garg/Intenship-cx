import React from 'react';
import { useLocation } from 'react-router-dom';

import './Booking.css';

function Booking() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const verifiedPhoneNumber = searchParams.get("phoneNumber");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Disable the submit button to prevent multiple submissions
    event.target.querySelector('button[type="submit"]').setAttribute('disabled', true);

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby2fRvbw8nwoFfVhDewVPgQ6QXxDLmLg-HfeU5ZERhy9FXhJ06QPGEyctqPV_JWtZPh-A/exec', {
            method: 'POST',
            body: JSON.stringify(formObject),
        });

        if (response.ok) {
            console.log('Form data sent successfully!');
            // Reset the form fields
            event.target.reset();
            // Redirect to Otp page
            window.location.href = '/Confirmation';
        } else {
            console.error('Failed to send form data.');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        // Re-enable the submit button after the request is completed
        event.target.querySelector('button[type="submit"]').removeAttribute('disabled');
    }
};



  return (
    <div className="login-root">
      <form className="box-root flex-flex flex-direction--column center-center" style={{ gridArea: 'top / start / 8 / end' }} onSubmit={handleSubmit}>
        <div className="big-box">
          <h1>PLACE YOUR NEW ORDER</h1>
          <div className="box-root flex-flex">
            {/* Sender Details Box */}
            <div className="details-box">
              <h2>Sender Details</h2>
              <div className="row">
                <input type="text" placeholder="Name" required name="senderName" />
                <input type="number" placeholder="Pincode" required name="senderPincode" />
              </div>
              <div className="row">
                <input type="number" placeholder="Phone Number" required name="senderPhoneNumber" defaultValue={verifiedPhoneNumber}  />
                <input type="text" placeholder="City" required name="senderCity" />
              </div>
              <div className="row">
                <input type="email" placeholder="Email" required name="senderEmail" />
                <input type="text" placeholder="State" required name="senderState" />
              </div>
              {/* Address Section */}
              <div className="address-box">
                <label>Address</label>
                <textarea rows="2" name="senderAddress" required></textarea>
              </div>
            </div>
            {/* Receiver Details Box */}
            <div className="details-box">
              <h2>Receiver Details</h2>
              <div className="row">
                <input type="text" placeholder="Name" required name="receiverName" />
                <input type="number" placeholder="Pincode" required name="receiverPincode" />
              </div>
              <div className="row">
                <input type="number" placeholder="Phone Number" required name="receiverPhoneNumber" />
                <input type="text" placeholder="City" required name="receiverCity" />
              </div>
              <div className="row">
                <input type="email" placeholder="Email" required name="receiverEmail" />
                <input type="text" placeholder="State" required name="receiverState" />
              </div>
              {/* Address Section */}
              <div className="address-box">
                <label>Address</label>
                <textarea rows="2" name="receiverAddress" required></textarea>
              </div>
            </div>
          </div>
          <div className="additional-details">
            <div className="row2">
              <input type="number" placeholder="Weight (in Kgs)" required name="weight" />
              <input type="number" placeholder="Number of Boxes" required name="numberOfBoxes" />
              <button type="submit">Submit</button>
            </div>
          
          </div>
        </div>
      </form>
      <div className="box-root flex-flex flex-direction--column" style={{flexGrow: 1 }}>
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
              <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
              <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
              <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
              <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
              <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
              <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
              <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
              <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;


