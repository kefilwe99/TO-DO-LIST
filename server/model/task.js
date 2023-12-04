// task.js
const Mongoose = require("mongoose")
const TaskSchema = new Mongoose.Schema({
  option: {
    type:String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
 time: {
  type: String,
  required: true,
},

})
const Task = Mongoose.model("Task", TaskSchema)
module.exports = Task