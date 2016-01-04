var fs = require("fs");

var sample = require("express").Router();

sample.get("/",function(req,res){
  res.send(fs.readFileSync("routes/code.js","utf8"));
})

module.exports = sample;
