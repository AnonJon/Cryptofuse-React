import React from "react";
import "../../App.css";

const Learnmore = () => {
  return (
    <div className="container">
      <div className="ourCompany">
        <h1>Our Company</h1>
        <p>
          Our team is dedicated to the advancement of the blockchain world and
          assisting others to safely participate in it.
        </p>
      </div>
      <div className="whatWeDo">
        <div className="whatWeDo-1">
          <h1>What We Do</h1>
          <p>
            Cryptofuse was created so anyone in minutes can have a diversified
            cryptocurrency portfolio. No need for hours of research on how to
            register, buy, and store your crypto. With just a few easy steps you
            can have a full diversified portfolio to track at anytime.
          </p>
        </div>
        <div className="whatWeDo-2">
          <img
            className="whatWeDoPhoto"
            src={require("../../images/images/agenda-analysis.jpg")}
            id="agenda-analysis"
            alt=""
          />
        </div>
      </div>
      <div className="ourValues">
        <div className="ourValues-1">
          <h1>Our Values</h1>
          <p>
            We look forward to helping as many people as we can get into the
            cryptocurrency world and secure their cryptocurrency holdings. We
            are continually looking for new and better ways to solve the storage
            dilemma that faces all blockchain participants. We know you have
            worked hard to make the decision to participate in cryptocurrency,
            so we intend to work hard to keep it safe for you.
          </p>
        </div>
        <div className="ourValues-2">
          <img
            className="ourValuesPhoto"
            src={require("../../images/images/agenda-analysis.jpg")}
            id="agenda-analysis"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Learnmore;
