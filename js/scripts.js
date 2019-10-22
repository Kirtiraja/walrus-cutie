$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle(80,"swing");
    $("#walrus-hidden").fadeToggle(2500,"swing");
  });

  $("button#green").click(function() {
    // $("body").removeClass();
    $("body").addClass("whiteOnBlack");
  });

  $("button#red").click(function() {
    $("body").removeClass();
  });

  $("p#run").click(function() {
    $("p#run").addClass("highlight");
  });


});
