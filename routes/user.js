var user = require("express").Router();

user.get("/*",function(req,res){
  var user = req.path.slice(1);
  res.send(user);
})

module.exports = user;
