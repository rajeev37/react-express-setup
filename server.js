const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

//DB Config
const db = require("./config/dev").mongoURI;

mongoose.connect(db)
    .then(() => console.log("MongoDB Connected.."))
    .catch(err => console.log(err));

// Routes
app.use("/user", require("./server/routes/userRoutes"));
app.use("/product", require("./server/routes/productRoutes"));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server Started on port ${port}`));