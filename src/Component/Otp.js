import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Otp = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const accessToken = searchParams.get("access_token");
  const history = useHistory();
  // Replace with your actual CLIENT_ID
  const CLIENT_ID = "14474945740456226999";

  const REDIRECT_URL = window.location.href;
  const AUTH_URL = `https://auth.phone.email/log-in?client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URL}`;

  const [responseData, setResponseData] = useState(null);

  const httpRequest = async () => {
    try {
      const url = "https://eapi.phone.email/getuser";
      const data = new FormData();

      data.append("access_token", accessToken);
      data.append("client_id", CLIENT_ID);

      const response = await fetch(url, { method: "POST", body: data });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      if (responseData.status !== 200) {
        throw new Error("Something went wrong");
      }

      setResponseData(responseData); // Store responseData in state

      // Redirect to booking page
      window.location.href = `/Booking?phoneNumber=${responseData.phone_no}`;

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      httpRequest();
    }
  }, [accessToken, history]);


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px 30px",
      }}
    >
      <div
        style={{
          color: "#024430 !important",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "0.5rem",
          boxShadow: "0 1px 3px rgba(17, 24, 39, .09)",
          width: "100%",
          maxWidth: "420px",
          margin: "0 auto",
          fontFamily:
            "sans-serif, serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          lineHeight: "28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"100px",
        }}
      >
        <img
          className="phe-login-img"
          width="250px"
          src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phe-signin-box.svg"
          alt="phone email login demo"
        />
        <h1 style={{ margin: "10px", color:"black" }}>OTP Verification</h1>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 20px",
            backgroundColor: "#02BD7E",
            fontWeight: "bold",
            color: "#ffffff",
            border: "none",
            borderRadius: "3px",
            fontSize: "inherit",
            cursor: "pointer",
            maxWidth: "320px",
            width: "100%",
          }}
          id="btn_ph_login"
          name="btn_ph_login"
          type="button"
          onClick={() =>
            window.open(
              AUTH_URL,
              "peLoginWindow",
              "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0, width=500, height=560, top=" +
                (window.screen.height - 600) / 2 +
                ", left=" +
                (window.screen.width - 500) / 2
            )
          }
        >
          <img
            src="https://storage.googleapis.com/prod-phoneemail-prof-images/phem-widgets/phem-phone.svg"
            alt="phone email"
            style={{ marginRight: "10px" }}
          />
          Verify Sender Phone Number
        </button>
      </div>
    </div>
  );
};

export default Otp;
