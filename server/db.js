const Mongoose = require("mongoose")

// db.js
const localDB = `mongodb://localhost:27017/TO-to-do-list`
const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB