$("#loginButton").click(function(){
  $.ajax({
    method: "GET",
    url: "user/chan9han"
  })
  .done(function(data){
    $("#codetext").text(data);
  });
});

$("#sampleButton").click(function(){
  $.ajax({
    method: "GET",
    url: "sample"
  })
  .done(function(data){
    $("#codetext").text(data);
  });
});
