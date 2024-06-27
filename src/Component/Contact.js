import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fxa96cd",
        "template_3ablmi4",
        {
          name,
          email,
          phone,
          message,
        },
        "ltW0YKF9coYUonpV2"
      )
      .then(
        (result) => {
          console.log("Email sent successfully");
          setEmailSent(true);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email", error);
        }
      );
  };
 
  return (
    <div className="container-mod">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      {emailSent ? null : (
      <>
        <span className="big-circle-mod"></span>
        <img src="img/shape.png" className="square-mod" alt="" />
      </>
    )}
      {emailSent ? (
        <div className="form-containerconthanks-container">
          <h2>Thank You We have received your Query,</h2> 
          <h2>Our team will get back to you Soon.</h2>
        </div>
      ) : (
      <div className="form-mod">
        
        <div className="contact-info-mod">
          <h3 className="title-mod">Let's get in touch</h3>
          <p className="text-mod">
          Take the first step by completing the form below, and know that we'll be here for you, ready to respond promptly to your needs.
          </p>

          <div className="info-mod">
            <div className="information-mod">
              <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
              <p>Bangalore, Karnataka - 560083</p>
            </div>
            <div className="information-mod">
              <i className="fas fa-envelope"></i> &nbsp;&nbsp;
              <p>support@campusexpress.org.in</p>
            </div>
            <div className="information-mod">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p> 9945590393, 9945588363</p>
              
            </div>
          </div>

          <div className="social-media-mod">
            <p>Connect with us :</p>
            <div className="social-icons-mod">
              <a href="https://wa.me/+919945590393">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/campus__express/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/campusexpress/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-mod">
          <span className="circle-mod one-mod"></span>
          <span className="circle-mod two-mod"></span>

          <form onSubmit={handleSubmit}>
            <h3 className="title-mod">Contact us</h3>
            <div className="input-container-mod">
              <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-mod"
            />
            </div>
            <div className="input-container-mod">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-mod"
            />
            </div>
            <div className="input-container-mod">
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="input-mod"
            />
            </div>
            <div className="input-container-mod textarea-mod">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="input-mod"
            ></textarea>
            </div>
            <input type="submit" className="btn-mod" />
          </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default Contact;
