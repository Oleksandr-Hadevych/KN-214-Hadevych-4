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

function scrollFunction() 
{
  var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
  {
    mybutton.style.visibility = "visible";
  } 
  else 
  {
    mybutton.style.visibility = "hidden";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}