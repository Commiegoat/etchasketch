$(document).ready(function() {
  $("#btn").on("click", function() {
    var $x = $("#numRows").val();
    generate($x);
  })
  
  function generate(x) {
    $(".fabuloso").remove();
    $("#board").find('br').remove();
    for (var i = 0; i < x; i++) {
    	$("#board").append( $("<div/>").addClass('fabuloso') );
        for (var j = 1; j < x; j++) {
        	$("#board").append($("<div/>").addClass('fabuloso'));
        }
        $("#board").append("<br/>");
      }
      $("#board").height(x*12).width(x*12);
      fabulize();
    }
    $("#numRows").val("");

  function fabulize() {
    $(".fabuloso").on("mouseover", function() {
      var $color = $("#penColor").val();
      $(this).css("background-color", $color);
    });
  };
})
