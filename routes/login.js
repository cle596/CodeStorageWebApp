var login = require("express").Router();

var html ="\
  <form>\
    <input id='user' placeholder='user'>\
    <input id='pw' type='password' placeholder='password'>\
  </form>\
";

login.get("/",function(req,res){
  res.send(html);
})

module.exports = login;
