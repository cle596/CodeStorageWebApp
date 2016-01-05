var fs = require("fs");

var sample = require("express").Router();

sample.get("/",function(req,res){
  var file = fs.readFileSync("misc/code.js","utf8");
  file = "<pre id='codetext' style='font-family: 'Ubuntu', sans-serif;'font-size': 13px;'>" +
    file +
    "</pre>";
  res.send(file);
})

module.exports = sample;
