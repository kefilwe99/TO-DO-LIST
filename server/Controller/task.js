const Task = require("../model/task")

// create task function
exports.CreateTask = async (req, res) => {
  const { name, option, date, time } = req.body
  try {
    await Task.create({
      option,
      name,
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
    const all_Tasks = await Task.find({});
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
    return res.json({ message: "Task id does not exit" });
  }
  const task = await Task.findById(id)
  res.json(task)
}

//update a specific item by Id function 
exports.update = async (req, res) => {
  try {
    const item = await Task.findByIdAndUpdate (req.params.id,req.body,{
      new:true,

    });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete
exports.DeleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "The item has been deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}