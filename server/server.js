const express = require("express")
const app = express()
const PORT = 5000
const connectDB = require("./db");

app.use(express.json())

//Connecting the Database
connectDB();

app.use("/api/auth", require("./Auth/Route"))
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))
