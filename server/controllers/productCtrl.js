const Product = require("../models/productModel");
const User = require("../models/userModel");
console.log("***")
module.exports = {
    fetchProduct: async(req, res, next) => {
        console.log("***find")
        const foundProduct = await User.find();
        return res.status(200).json({data: foundProduct})

    },
}