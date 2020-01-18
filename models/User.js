const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  coin_total: {
    type: Number,
    default: 0
  },
  receiveAddress: {
    type: String,
    default: ""
  },
  extendedPublicKey: {
    type: String,
    default: ""
  },
  bitcoin_amount: {
    type: String,
    default: "0.000"
  },
  address: {
    city: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    }
  },
  about: {
    type: String,
    default: "I am a new Cryptofuse user"
  },
  totpSecret: {
    type: String,
    required: true
  },
  twoFactorSetup: {
    type: Boolean,
    default: false
  },
  twoFactorVerify: {
    type: Boolean,
    default: false
  }
});

module.exports = User = mongoose.model("user", UserSchema);
