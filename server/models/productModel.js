const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema
const productSchema = new Schema({
    name: String,
    description: String,
    price: String
})

// Create a model
const Product = mongoose.model("product", productSchema);

//Export the model
module.exports = Product;