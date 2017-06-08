$(document).ready(function() {
  
  generate(16);

  $("#btn").on("click", function() {
    $("#shaker").effect("shake", {direction: "up", times: 3, distance: 17}, 600);
    $(".fabuloso").remove();
    $("#board").find('br').remove();
    window.setTimeout(numRows, 600);
  })
  
  function numRows() {
  	var rows = window.prompt("Enter a number under 64", 16);
  	generate(rows);
  }

  function generate(x) {
  	var $size = ($("#board").width()/x);
  	if ($.isNumeric(x) && x<=64) {
	  	for (var i = 0; i < x; i++) {     
	      
	      var $div = $("#board").append( $("<div/>").addClass('fabuloso').css({"height": $size, "width": $size}));     
	        for (var j = 1; j < x; j++) {
	          $("#board").append( $("<div/>").addClass('fabuloso').css({"height": $size, "width": $size}));
	        }
	        $("#board").append("<br/>");
	    }
  	} else {
  		alert(x + " is not a number or is too big!")
  		numRows();
  	}
      fabulize();
    }

  function fabulize() {
    $(".fabuloso").on("mouseover", function() {
      var $color = $("#penColor").val();
      $(this).css("background-color", $color);
    });
  };
});