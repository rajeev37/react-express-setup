const express = require("express");
const router = require("express-promise-router")();
const UserCtrl = require("../controllers/userCtrl");

router.route("/user").post(UserCtrl.save);

module.exports = router;