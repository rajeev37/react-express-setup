const express = require("express");
const router = require("express-promise-router")();
const ProductCtrl = require("../controllers/productCtrl");
console.log("**************")
router.route("/fetchProducts").get(ProductCtrl.fetchProduct);

module.exports = router;