const Task = require("../model/task")

// create task function
exports.CreateTask = async (req, res, next) => {
  const { name,option,date, time } = req.body
  try {
    await Task.create({
      name,
      option,
      date,
      time,
    }).then(Task =>
      res.status(200).json({
        message: "Task successfully created",
        Task,
      })
    )
  } catch (err) {
    res.status(401).json({
      message: "Task not successful created",
    })
  }
}