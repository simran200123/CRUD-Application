const mongoose = require("mongoose");

const DB = "mongodb+srv://simransaxena718:Simran123@dashboard.eoc9xqd.mongodb.net/simran";


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("connection start")).catch((error)=> console.log(error.message));
