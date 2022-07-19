const asyncHandler = require("express-async-handler");
const Register = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body;

  const userExists = await Register.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const user = await Register.create({ name, username, email, password });

  if (user) {
    res.status(201).json({
      name: user.name,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const user = await Register.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      name: user.name,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    // window.alert("Invalid Username or Password");
    throw new Error("Invalid Username or Password");
  }
});

const homepage = asyncHandler(async (req, res) => {
  const user = await Register.findOne(req.params.id).exec(function (err, data) {
    if (err) {
      console.log("Error");
    } else {
      console.log(res.json(data.name));
    }
  });
});

module.exports = { registerUser, authUser, homepage };
