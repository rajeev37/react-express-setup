const User = require("../models/userModel");
module.exports = {
    save: async(req, res, next) => {
        console.log(req.body);
       const { email, password } = req.body;
       const newUser = new User({ email, password });
       await newUser.save();

       res.json({user: "created"});

    },
}