const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    // age: {
    //     type: String,
    //     required: true
    // },
    performance: {
        type: Number,
        required: true
    },
    // work: {
    //     type: String,
    //     required: true
    // },
    // add: {
    //     type: String,
    //     required: true
    // },
    desc: {
        type: String,
        required: true
    }
});

const user = new mongoose.model("users",userSchema);

module.exports = user;
