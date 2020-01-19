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
  }
});

module.exports = Admin = mongoose.model("admin", AdminSchema);
