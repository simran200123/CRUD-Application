require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const user = require("./models/userSchema")
const cors = require("cors");
require("./db/conn");
const router = require("./routes/router");

const port = 8003;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port,() =>{
    console.log('server is started at port number',{port});
})