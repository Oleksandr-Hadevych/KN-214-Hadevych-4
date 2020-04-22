//JQuery functions
$(document).ready(function(){
  $("#toggle").click(function(){
    $("li").slideToggle();
  });
  $(".dropbtn").click(function(){
    $(".dropdown").toggle();
  });
});
$(document).ready(function(){
    $('.slider').bxSlider();
    });

//Native JS
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

function openWindow(button)
{
  let getInfo = document.querySelectorAll(".more_info");
  let information=document.querySelectorAll(".window");
  for (var i =0; i< getInfo.length; i++)
  {
    if(getInfo[i] == button)
      information[i].style.display='block';
             
  }
}
function closeWindow(span)
{
  let close = document.querySelectorAll("#close");
  let information=document.querySelectorAll(".window");
  for (var i =0; i< close.length; i++)
  {
    if (close[i]==span)
      information[i].style.display='none';            

  }
}
