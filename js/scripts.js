$(document).ready(function() {
  var age = parseInt(prompt("What is your age?"));

  if (age >= 18) {
    $("#vote").show();
  } else {
    $("#under-18").show();
  }
});
