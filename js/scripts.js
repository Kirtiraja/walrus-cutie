$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle(80,"swing");
    $("#walrus-hidden").fadeToggle(2500,"swing");
  });
});
