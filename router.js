var router = require("express").Router();

router.get("/user/*",function(req,res){
  var user = req.path.slice(6);
  console.log(user);
  res.end();
})

module.exports = router;
