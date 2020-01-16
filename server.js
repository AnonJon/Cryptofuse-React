const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const proxy = require("http-proxy-middleware");
app.use(cors());
// Bodyparser Middleware
app.use(express.json());

app.use(proxy("/merchant", { target: "http://localhost:3001" }));

// DB Config
const db = process.env.mongoURI;
dotenv.config();

app.use(express.urlencoded({ extended: true }));

// Connect to Mongo
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use Routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => `Server running on port ${PORT}`);
