$("#loginButton").click(function(){
  $.ajax({
    method: "GET",
    url: "login"
  })
  .done(function(data){
    $("#code").html(data);
  });
});

$("#sampleButton").click(function(){
  $.ajax({
    method: "GET",
    url: "sample"
  })
  .done(function(data){
    var pre = "<pre id='codetext' style='font-family: 'Ubuntu', sans-serif;'font-size': 13px;'></pre>";
    $("#code").html(pre);
    $("#codetext").text(data);
  });
});
