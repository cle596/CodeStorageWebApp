$("#sampleButton").click(function(){
  $.ajax({
    method: "GET",
    url: "sample"
  })
  .done(function(data){
    $("#codetext").text(data);
  });
});
