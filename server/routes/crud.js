const express = require("express")
const router = express.Router()

const { register, login} = require("../Auth/Auth")


const {CreateTask, getAllTasksfunc, getOneTaskfunc} = require("../Controller/task")


// Register user Route
router.route("/register").post(register);

// User login Route
router.route("/login").post(login);


// Create Task Route
router.route("/create").post(CreateTask);

// getAllTasks Route
router.route("/all").get(getAllTasksfunc);

// get One Task Route
router.route("/single/:id").get(getOneTaskfunc);


module.exports = router 