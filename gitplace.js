var express = require("express");
var user = require("./routes/user");
var sample = require("./routes/sample")

var gitplace = express();
gitplace.listen(8000,'0.0.0.0');

gitplace.use(express.static("browser"));
gitplace.use("/user",user);
gitplace.use("/sample",sample);
