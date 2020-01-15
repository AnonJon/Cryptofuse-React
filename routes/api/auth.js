const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const dotenv = require("dotenv");
const Speakeasy = require("speakeasy");
dotenv.config();
// User Model
const User = require("../../models/User");

// @route   POST api/auth
// @desc    Auth user
// @access  Public

router.post("/", (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User Does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

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

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

//setting up 2fa

router.post("/totp-secret", (req, res, next) => {
  var secret = Speakeasy.generateSecret({ length: 20 });
  res.send({ secret: secret.base32 });
});
router.post("/totp-generate", (req, res, next) => {
  res.send({
    token: Speakeasy.totp({
      secret: req.body.secret,
      encoding: "base32"
    }),
    remaining: 30 - Math.floor((new Date().getTime() / 1000.0) % 30)
  });
});
router.post("/totp-validate", (req, res, next) => {
  res.send({
    valid: Speakeasy.totp.verify({
      secret: req.body.secret,
      encoding: "base32",
      token: req.body.token,
      window: 0
    })
  });
});

module.exports = router;
