var express = require("express");

var user = require("./routes/user");
var sample = require("./routes/sample")
var login = require("./routes/login");

var gitplace = express();
gitplace.listen(8000,'0.0.0.0');

gitplace.use(express.static("browser"));

gitplace.use("/login",login);
gitplace.use("/sample",sample);
gitplace.use("/user",user);
