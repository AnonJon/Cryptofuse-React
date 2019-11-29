var blockchain = require("blockchain.info");
var MyWallet = require("blockchain.info/MyWallet");
const config = require("config");

const api = config.get("apiCode");
var options = { apiCode: api, apiHost: "http://localhost:3000" };
