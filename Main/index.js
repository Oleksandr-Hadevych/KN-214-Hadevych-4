$(document).ready(function(){
  $("#toggle").click(function(){
  	$("li").slideToggle();
  });
  $(".dropbtn").click(function(){
  	$(".dropdown").toggle();
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}

