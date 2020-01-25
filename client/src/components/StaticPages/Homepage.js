import React from "react";
import Button from "@material-ui/core/Button";
import "../../App.css";
import { Link } from "react-router-dom";
//Lotties
import LockLottie from "../../Lotties/LockLottie";
import ChatLottie from "../../Lotties/ChatLottie";
import VerifyLottie from "../../Lotties/VerifyLottie";

import Particles from "react-particles-js";

const Homepage = () => {
  return (
    <container>
      <main data-aos="fade" className="main-homePage">
        <div className="title">
          <Particles
            height="1200px"
            params={{
              particles: {
                number: {
                  value: 80
                },
                size: {
                  value: 3
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />

          <div className="title-div" data-aos="fade" data-aos-duration="1500">
            <img
              alt=""
              className="logo-homePage"
              src={require("../../images/images/logo-1white.png")}
            />
            <h4>Diversified Storage Made Easy</h4>

            <Link style={{ textDecoration: "none" }} to="/learn-more">
              <Button variant="outlined" style={{ color: "white" }}>
                Learn More
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="register">
              <Button variant="outlined" style={{ color: "white" }}>
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
        <div className="companies" data-aos="fade">
          <img
            className="company-logo-1"
            src={require("../../images/images/techCrunch.png")}
            alt=""
          />
          <img
            className="company-logo-2"
            src={require("../../images/images/wired.png")}
            alt=""
          />
          <img
            className="company-logo-3"
            src={require("../../images/images/Cryptocompare_logo.png")}
            alt=""
          />
        </div>

        <div className="home-stats">
          <div id="home-stat-1" data-aos="fade">
            <h1>53%</h1>
            <p>Cryptofuse performance gain even in a down market. *</p>
          </div>
          <div id="home-stat-2" data-aos="fade">
            <h1>1.3M+</h1>
            <p>In our diversified portfolio</p>
          </div>
          <div id="home-stat-3" data-aos="fade">
            <h1>5K+</h1>
            <p>Our users are growing by the day.</p>
          </div>
        </div>

        <div className="home-why-cryptofuse">
          <h1>Why Cryptofuse?</h1>
          <div className="explain-icons-container">
            <div className="explain-icons">
              <div className="icon" data-aos="fade">
                <img
                  className="#"
                  src={require("../../images/images/head.svg")}
                  alt=""
                />
                <h3>Hassle Free</h3>
                <p>
                  No need to remember and store multiple passwords and phrases
                </p>
              </div>
              <div className="icon" data-aos="fade">
                <img
                  className="#"
                  src={require("../../images/images/bank.svg")}
                  alt=""
                />
                <h3>Accessibility</h3>
                <p>View your account on the go</p>
              </div>
              <div className="icon" data-aos="fade">
                <ChatLottie />

                <h3>Expert Support</h3>
                <p>Quick response to your questions and concerns</p>
              </div>
              <div className="icon" data-aos="fade">
                <LockLottie />

                <h3>Cold Storage</h3>
                <p>Offline peace of mind storage</p>
              </div>
              <div className="icon" data-aos="fade">
                <VerifyLottie />
                <h3>Asset Verification</h3>
                <p>Third Party Smart Asset Verification</p>
              </div>
              <div className="icon" data-aos="fade">
                <img
                  className="#"
                  src={require("../../images/images/diversity.svg")}
                  alt=""
                />
                <h3>Diversification</h3>
                <p>Keeping a stable portfolio in the up and down market</p>
              </div>
            </div>
          </div>
        </div>
        <div className="howItWorks">
          <h2>How It Works</h2>
          <p>Become Diversified In Three Easy Steps</p>
          <div className="howItWorks-container">
            <div className="howItWorks-icon" data-aos="fade-up">
              <img
                className="#"
                src={require("../../images/images/contract.svg")}
                alt=""
              />
              <h3>Sign Up</h3>
              <p>Take your first step to a diversified portfolio</p>
            </div>
            <div className="howItWorks-icon" data-aos="fade-up">
              <img
                className="#"
                src={require("../../images/images/deposit.svg")}
                alt=""
              />
              <h3>Deposit</h3>
              <p>
                Exchange for fuse tokens with either fiat or an assortment of
                cryptocurrencies
              </p>
            </div>
            <div className="howItWorks-icon" data-aos="fade-up">
              <img
                className="#"
                src={require("../../images/images/receive.svg")}
                alt=""
              />
              <h3>Receive Token</h3>
              <p>
                Become fully diversified in the top performing cryptocurrencies
              </p>
            </div>
          </div>
        </div>
      </main>
    </container>
  );
};

export default Homepage;
