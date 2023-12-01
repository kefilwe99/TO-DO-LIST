const Task = require("../model/task")
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

//get All tasks function
exports.getAllTasks = async (req, res) => {
  try {
    const all_Tasks = await this.find({});
    res.json(all_Tasks);
  } catch (error) {
    res.json({
      message: "Something went wrong, try again later",
      error: error.message,
    });
  }
};


//get One task function
exports.getOneTask = async (req, res) => {
    const { id } = req.params;
    
    if (!id) {
      return res.json({ message: "Task id does not exit"});
    }
    // try{
      const Task = await Task.findById(id)
      res.json(this.Task)
      //} catch (error) {
        // res.json({ message: 'Something ent wrong, try again later' })
        //}
  }