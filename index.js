const express = require("express");
const mongoose = require("mongoose");

const models = require("./models");


mongoose.connect("mongodb://0.0.0.0:27017/", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    
});

const app = express();

const userRoute = require("./routes/user");

app.set("models", models);

userRoute(app);

app.use(express.json());

app.listen(3000, () => {
    console.log("Serveur successfully launch")
});
