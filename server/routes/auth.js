const express = require("express")
const router = express.Router()
const { register, login } = require("../Controller/Auth")



// Register user Route
router.route("/register").post(register);

// User login Route
router.route("/login").post(login);


module.exports = router