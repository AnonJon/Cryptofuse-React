import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footer-left">
          <img
            className="footer-logo"
            src={require("../../images/images/logo-1white.png")}
            alt=""
          />
          <p>Diversified cryptocurrency involvement made easy and secure.</p>
          <p >
            BLOCKCHAIN PARTNERS LIMITED 71-75 SHELTON ST COVENT GARDEN LONDON
            WC2H9JQ
          </p>
          
          <h2>Payments Accepted</h2>
          <p>___</p>
        </div>
        <div className="footer-mid">
          <h3>CONTACT DETAILS</h3>
          <p>___</p>
          <img
            className="footer-envelope"
            src={require("../../images/images/mail-black-envelope-symbol.svg")}
            alt=""
          />

          <span>info@cryptofuse.net</span>
          <br></br>
          <img
            className="footer-envelope"
            src={require("../../images/images/phone-call.svg")}
            alt=""
          />
          <span>1-800-222-4545</span>
          <br></br>
          <img
            className="footer-envelope"
            src={require("../../images/images/maps.svg")}
            alt=""
          />

          <span>Location</span>
          <h3>CONNECT WITH US</h3>
          <p>___</p>
        </div>
        <div className="footer-right">
          <h3>MORE INFO</h3>
          <p>___</p>
          <Link style={{ textDecoration: "none", color: "whitesmoke" }} to="#">
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className="footer-company">
        <span>Blockchain Partners Limited - All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
