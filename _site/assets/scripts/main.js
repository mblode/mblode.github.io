$(document).ready(function() {
  $("#ta-cube-contents").click(function() {
    if ($("body").attr("data-navstate") == "open") {
      $("body").attr("data-navstate", "hide");
    } else if ($("body").attr("data-navstate") == "hide") {
      $("body").attr("data-navstate", "open");
    }
  });
});