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
    $("#code").html(data);
  });
});
