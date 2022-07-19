const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "divyamJain1511", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
