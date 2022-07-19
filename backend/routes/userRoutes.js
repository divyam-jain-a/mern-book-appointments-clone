const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  homepage,
} = require("../controllers/userControllers");

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/homepage/:username").get(homepage);

module.exports = router;
