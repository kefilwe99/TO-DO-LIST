const express = require("express")
const app = express()
const PORT = 5000
const connectDB = require("./db");
const cors = require("cors");

app.use(express.json())
app.use(cors());
//Connecting the Database
connectDB();



app.use("/api/auth", require("./routes/auth"))

app.use("/api/task", require("./routes/crud"))

// app.use('api/', require('./routes/crud'));
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))
