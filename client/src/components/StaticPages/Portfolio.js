import React from "react";
import "../../App.css";
import PortfolioChart from "./Portfolio-chart.js";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class Portfolio extends React.Component {
  state = {
    BTC: [],
    ETH: [],
    LTC: [],
    DASH: [],
    XRP: [],
    BCH: [],
    XLM: [],
    BAT: [],
    XEM: []
  };

  async componentDidMount() {
    const url =
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC,BCH,DASH,XLM,XEM,BAT&tsyms=USD";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      BTC: data.DISPLAY.BTC.USD,
      ETH: data.DISPLAY.ETH.USD,
      LTC: data.DISPLAY.LTC.USD,
      DASH: data.DISPLAY.DASH.USD,
      XRP: data.DISPLAY.XRP.USD,
      BCH: data.DISPLAY.BCH.USD,
      XLM: data.DISPLAY.XLM.USD,
      BAT: data.DISPLAY.BAT.USD,
      XEM: data.DISPLAY.XEM.USD
    });
    console.log(this.state.BTC);
  }

  render() {
    const higherBTC = this.state.BTC.CHANGEPCT24HOUR > 0;
    const higherETH = this.state.ETH.CHANGEPCT24HOUR > 0;
    const higherXRP = this.state.XRP.CHANGEPCT24HOUR > 0;
    const higherLTC = this.state.LTC.CHANGEPCT24HOUR > 0;
    const higherBCH = this.state.BCH.CHANGEPCT24HOUR > 0;
    const higherDASH = this.state.DASH.CHANGEPCT24HOUR > 0;
    const higherXLM = this.state.XLM.CHANGEPCT24HOUR > 0;
    const higherXEM = this.state.XEM.CHANGEPCT24HOUR > 0;
    const higherBAT = this.state.BAT.CHANGEPCT24HOUR > 0;
    return (
      <main data-aos="fade">
        <div className="portfolio-container">
          <div className="portfolio-left-wrapper">
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/btc-80x80.png")}
                alt=""
              />
              <p>BTC</p>
              <p id="coin-percentage">{this.state.BTC.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherBTC ? { color: "green" } : { color: "red" }}
              >
                % {this.state.BTC.CHANGEPCT24HOUR}
              </p>
            </div>
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/eth_logo-80x80.jpg")}
                alt=""
              />
              <p>ETH</p>
              <p id="coin-percentage">{this.state.ETH.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherETH ? { color: "green" } : { color: "red" }}
              >
                % {this.state.ETH.CHANGEPCT24HOUR}
              </p>
            </div>
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/xrp-80x80.png")}
                alt=""
              />
              <p>XRP</p>
              <p id="coin-percentage">{this.state.XRP.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherXRP ? { color: "green" } : { color: "red" }}
              >
                % {this.state.XRP.CHANGEPCT24HOUR}
              </p>
            </div>
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/litecoin-logo-80x80.png")}
                alt=""
              />
              <p>LTC</p>
              <p id="coin-percentage">{this.state.LTC.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherLTC ? { color: "green" } : { color: "red" }}
              >
                % {this.state.LTC.CHANGEPCT24HOUR}
              </p>
            </div>
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/12-bitcoin-cash80x80.png")}
                alt=""
              />
              <p>BCH</p>
              <p id="coin-percentage">{this.state.BCH.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherBCH ? { color: "green" } : { color: "red" }}
              >
                % {this.state.BCH.CHANGEPCT24HOUR}
              </p>
            </div>
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/dash-80x80.png")}
                alt=""
              />
              <p>DASH</p>
              <p id="coin-percentage">{this.state.DASH.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherDASH ? { color: "green" } : { color: "red" }}
              >
                % {this.state.DASH.CHANGEPCT24HOUR}
              </p>
            </div>
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/str-80x80.png")}
                alt=""
              />
              <p>XLM</p>
              <p id="coin-percentage">{this.state.XLM.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherXLM ? { color: "green" } : { color: "red" }}
              >
                % {this.state.XLM.CHANGEPCT24HOUR}
              </p>
            </div>
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/xem-80x80.png")}
                alt=""
              />
              <p>NEM</p>
              <p id="coin-percentage">{this.state.XEM.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherXEM ? { color: "green" } : { color: "red" }}
              >
                % {this.state.XEM.CHANGEPCT24HOUR}
              </p>
            </div>
            <div className="portfolio-coin">
              <img
                className="portfolio-coin-img"
                src={require("../../images/images/bat-80x80.png")}
                alt=""
              />
              <p>BAT</p>
              <p id="coin-percentage">{this.state.BAT.PRICE}</p>
              <p
                id="coin-percentage"
                style={higherBAT ? { color: "green" } : { color: "red" }}
              >
                % {this.state.BAT.CHANGEPCT24HOUR}
              </p>
            </div>
          </div>
          <div className="portfolio-right-wrapper">
            <h1>Diversity Matters</h1>
            <p>
              Cryptofuse allows you to hold an entire diversified portfolio in
              minutes. Click below to see how diversification leads to a healthy
              portfolio.
            </p>
            <Link style={{ textDecoration: "none" }} to="/learn-more">
              <Button variant="outlined">Learn More</Button>
            </Link>
            <div>
              <PortfolioChart />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
