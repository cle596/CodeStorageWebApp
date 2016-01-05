var fs = require("fs");

var sample = require("express").Router();

sample.get("/",function(req,res){
  var file = fs.readFileSync("misc/code.js","utf8");
  res.send(file);
})

module.exports = sample;
