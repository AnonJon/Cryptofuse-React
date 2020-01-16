const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/merchant", { target: "http://localhost:3001" }));
};
