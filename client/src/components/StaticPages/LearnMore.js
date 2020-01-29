import React from "react";
import "../../App.css";
import mp4 from "../../images/CryptoFuse.mp4";
import DataAnimationLottie from "../../Lotties/DataAnimationLottie";
import EcoLivingLottie from "../../Lotties/EcoLivingLottie";
import LockLottie from "../../Lotties/LockLottie";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  background: {
    marginTop: "100px",
    padding: "100px 0",
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "center"
  },
  learnMoreContainer: {
    textAlign: "center",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  icon: {
    color: "white",
    fontSize: "40px"
  },
  userBox: {
    display: "flex"
  },
  userName: {
    marginBottom: "-5px"
  }
}));

const Learnmore = () => {
  const classes = useStyles();
  return (
    <div className="learn-more">
      <div className="video-div">
        <video id="background-video" loop autoPlay muted>
          <source src={mp4} type="video/mp4" />
          <source src={mp4} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="ourCompany">
        <img
          alt=""
          className="logo-homePage"
          src={require("../../images/logo-1.png")}
        />
        <p>
          Our team is dedicated to the advancement of the blockchain world and
          assisting others to safely participate in it.
        </p>
      </div>
      <div className="whatWeDo">
        <div
          className="whatWeDo-1"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h1>What We Do</h1>
          <p>
            Cryptofuse was created so anyone in minutes can have a diversified
            cryptocurrency portfolio. No need for hours of research on how to
            register, buy, and store your crypto. With just a few easy steps you
            can have a full diversified portfolio to track at anytime.
          </p>
        </div>
        <div className="whatWeDo-2">
          <DataAnimationLottie />
        </div>
      </div>
      <div className="ourValues">
        <div className="ourValues-2">
          <EcoLivingLottie />
        </div>
        <div
          className="whatWeDo-1"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
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
      </div>
      <div className="core-services">
        <h1>Core Services</h1>
        <h2>______</h2>
        <div className="howItWorks-container">
          <div
            className="coreServices-icon"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="#"
              src={require("../../images/images/diversity.svg")}
              alt=""
            />
            <h3>Diversified Portfolio</h3>
            <p>Diversify evenly between all of the top cryptocurrencies.</p>
          </div>
          <div
            className="coreServices-icon"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="#"
              src={require("../../images/images/vault.svg")}
              alt=""
            />
            <h3>Cold Storage Safety</h3>
            <p>Completely offline cold storage with 3rd party verification.</p>
          </div>
          <div
            className="coreServices-icon"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              className="#"
              src={require("../../images/images/law.svg")}
              alt=""
            />
            <h3>Monthly Rebalancing</h3>
            <p>
              A balanced portfolio has been proven to result in the best return
              over time. Rebalancing is essential but costly. We take care of
              that for you.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.background}>
        <div className={classes.learnMoreContainer}>
          <p>
            “The care and attention to detail paid by the whole team at
            Cryptofuse is really second to none. I knew nothing about
            cryptocurrencies, and now I check daily on what the markets are
            doing”
          </p>
          <div className={classes.userBox}>
            <Badge badgeContent={0} color="default">
              <Avatar>
                <PersonIcon className={classes.icon} />
              </Avatar>
            </Badge>
            <div>
              <p className={classes.userName}>Devon Jones</p>
              <p>User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learnmore;
