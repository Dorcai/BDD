const { userGet, userCreate } = require("../controllers/user");

function userRoute(app) {
    //create
    app.post("/userCreate", userCreate);
   
    app.get("/user", userGet);
}

module.exports = userRoute;