var express = require("express");
var router = require("./router");

var gitplace = express();
gitplace.listen(8000,'0.0.0.0');

gitplace.use(express.static("browser"));
gitplace.use("/",router);
