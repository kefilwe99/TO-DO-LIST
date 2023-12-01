const express = require("express")
const router = express.Router()

const { register, login} = require("../Auth/Auth")


const {CreateTask} = require("../Controller/task")


// Register user Route
router.route("/register").post(register);

// User login Route
router.route("/login").post(login);


// Create Task Route
router.route("/create").post(CreateTask);

// 


module.exports = router 