const express = require("express");
const router = express.Router();

const Admin = require("../../models/Admin");

router.post("/", (req, res) => {
  // const { fuse_price, fuse_token_amount } = req.body;
  // const newAdmin = new Admin({
  //   fuse_price,
  //   fuse_token_amount
  // });

  newAdmin.save().then(admin => res.json(admin));
});

router.get("/getAdmin", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.json({ message: err });
  }
});

//update admin fuse_price
router.patch("/updateFusePrice", async (req, res) => {
  try {
    const updateFusePrice = await Admin.updateOne({
      $set: { fuse_price: req.body.fuse_price }
    });
    res.json(updateFusePrice);
  } catch (err) {
    res.json({ message: err });
  }
});

//update fusePrice last updated
router.patch("/lastUpdated", async (req, res) => {
  try {
    const lastUpdated = await Admin.updateOne({
      $set: { priceUpdated: req.body.priceUpdated }
    });
    res.json(lastUpdated);
  } catch (err) {
    res.json({ message: err });
  }
});

//push to fuse_price array
router.put("/pushFusePrice", async (req, res) => {
  try {
    const pushFusePrice = await Admin.updateOne({
      $push: { fuse_price_history: [req.body.fuse_price_history] }
    });
    res.json(pushFusePrice);
  } catch (err) {
    res.json({ message: err });
  }
});

//update admin fuse_token_amount
router.patch("/updateFuseTokenAmount", async (req, res) => {
  try {
    const updateFuseTokenAmount = await Admin.updateOne({
      $set: { fuse_token_amount: req.body.fuse_token_amount }
    });
    res.json(updateFuseTokenAmount);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
