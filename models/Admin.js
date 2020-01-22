const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const AdminSchema = new Schema({
  fuse_price: {
    type: Number,
    default: 0.0
  },
  fuse_token_amount: {
    type: Number,
    default: 57211.32
  },
  bitcoin_total_amount: {
    type: Number,
    default: 0.7429242
  },
  ethereum_total_amount: {
    type: Number,
    default: 11.83562741
  },
  litecoin_total_amount: {
    type: Number,
    default: 47.10575761
  },
  dash_total_amount: {
    type: Number,
    default: 3.98272058
  },
  xrp_total_amount: {
    type: Number,
    default: 10790.25
  },
  bitcoinCash_total_amount: {
    type: Number,
    default: 7.19715627
  },
  stellar_total_amount: {
    type: Number,
    default: 5776.384141
  },
  bat_total_amount: {
    type: Number,
    default: 7065.26
  },
  nem_total_amount: {
    type: Number,
    default: 8533.17959
  }
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
