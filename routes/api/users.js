const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

// User Model
const User = require("../../models/User");
dotenv.config();

// @route   POST api/users
// @desc    Register new user
// @access  Public

//User Contact Form

router.post("/userContact", (req, res) => {
  const { name, email, subject, message } = req.body;

  const HTMLemail = `
  <h3>New Cryptofuse Contact Form</h3>
  <ul>
    <li>Name: ${name}</li>
    <li>Email: ${email}</li>
    <li>Subject: ${subject}</li>
  </ul>
  <h3>Message:</h3>
  <p>${message}</p>`;

  const transporter = nodemailer.createTransport({
    host: "gator3107.hostgator.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.userEmail,
      pass: process.env.emailPassword
    }
  });
  const mailOptions = {
    from: "contact@Cryptofuse.com",
    to: process.env.userEmail,
    replyTo: email,
    subject: "Cryptofuse Contact Form Submission",
    text: message,
    html: HTMLemail
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: %s", info.message);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  res.json(req.body);
});

//Gets all of the users
router.get("/getAll", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});
//Delete user
router.delete("/deleteUser/:userId", async (req, res) => {
  try {
    const deleteUser = await User.remove({ _id: req.params.userId });
    res.json(deleteUser);
  } catch (err) {
    res.json({ message: err });
  }
});
//update user email
router.patch("/updateEmail/:userId", async (req, res) => {
  try {
    const updateEmail = await User.updateOne(
      { _id: req.params.userId },
      { $set: { email: req.body.email } }
    );
    res.json(updateEmail);
  } catch (err) {
    res.json({ message: err });
  }
});
//update user coin_total
router.patch("/updateCoinTotal/:userId", async (req, res) => {
  try {
    const updateCoinTotal = await User.updateOne(
      { _id: req.params.userId },
      { $set: { coin_total: req.body.coin_total } }
    );
    res.json(updateCoinTotal);
  } catch (err) {
    res.json({ message: err });
  }
});
//update two-factor sign in
router.patch("/updateTwoFactorSignin/:userId", async (req, res) => {
  try {
    const updateTwoFactor = await User.updateOne(
      { _id: req.params.userId },
      { $set: { twoFactorSetup: req.body.twoFactorSetup } }
    );
    res.json(updateTwoFactor);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    receiveAddress,
    extendedPublicKey
  } = req.body;

  // Simple validation
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      first_name,
      last_name,
      email,
      password,
      receiveAddress,
      extendedPublicKey
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            process.env.jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  first_name: user.first_name,
                  last_name: user.last_name,
                  email: user.email,
                  coin_total: user.coin_total,
                  receiveAddress: user.receiveAddress,
                  extendedPublicKey: user.extendedPublicKey,
                  bitcoin_amount: user.bitcoin_amount,
                  totpSecret: user.totpSecret,
                  city: user.address.city,
                  country: user.address.country,
                  about: user.about,
                  twoFactorSetup: user.twoFactorSetup,
                  twoFactorVarify: user.twoFactorVarify,
                  test: user.test
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
