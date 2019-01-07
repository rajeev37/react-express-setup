const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema
const userSchema = new Schema({
    userName: String,
    email: String,
    password: String
})

// Create a model
const User = mongoose.model("user", userSchema);

//Export the model
module.exports = User;