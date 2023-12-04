const express = require("express")
const router = express.Router()


const {CreateTask, getAllTasks, getOneTask, update, DeleteTask} = require("../Controller/task")



// Create Task Route
router.route("/create").post(CreateTask);

// getAllTasks Route
router.route("/all").get(getAllTasks);

// get One Task Route
router.route("/single/:id").get(getOneTask);

// update specific item by Id
router.route("/update/:id").put(update);


// delete
router.route("/delete/:id").delete(DeleteTask);

module.exports = router 