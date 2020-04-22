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




window.onload = function()
{
    if(localStorage.getItem(`theme`) != null)
    {
        if(localStorage.getItem(`theme`) == `dark`)
            setDark();
        else
            setLight();
    }
}

function toggleTheme()
{
    if(localStorage.getItem(`theme`) != null)
    {
        if(localStorage.getItem(`theme`) == `dark`)
        {
            localStorage.setItem(`theme`, `light`);
            setLight();
        }
        else
        {
            localStorage.setItem(`theme`, `dark`);
            setDark();

        }
    }
}
function setDark()
{
    var text=document.getElementById("text");
    text.innerHTML='Світла тема';
    $('nav').css('background-color','black');
    $('ul li').css('color','white');
    $('.dropdown').css('background-color', 'black');
    $('#toggleTheme').css({"background-color":'black', "color":'white','left':'10px'});
    $('.text1').css({'background-color': 'black','color' :'white'});
    $('.text2').css({'background-color': 'black','color' :'white'});
    $('button').css({"background-color":'black', "color":'white'});
    $('footer').css('background-color', 'black');
    $('input').css('background-color', 'black');
    $('textarea').css('background-color', 'black');
    $('.submit_btn').css('background-color', 'black');
    $('.data').css('color','white');
    $('#text_for_email').css('color','white');
    $('#submit').css('color','white');
    $('.copyright').css('color','white'); 
}

function setLight() 
{
    var text=document.getElementById("text");
    text.innerHTML='Темна тема';
    $('nav').css('background-color','#F0E4E4');
    $('ul li').css('color','black');
    $('.dropdown').css('background-color', '#F0E4E4');
    $('#toggleTheme').css({"background-color":'#F0E4E4', "color":'black','left':'92%'});
    $('.text1').css({'background-color': '#F0E4E4','color' :'black'});
    $('.text2').css({'background-color': '#F0E4E4','color' :'black'});
    $('button').css({'background-color': '#F0E4E4','color' :'black'});
    $('footer').css('background-color', '#F0E4E4');
    $('input').css('background-color', '#F0E4E4');
    $('textarea').css('background-color', '#F0E4E4');
    $('.submit_btn').css('background-color', '#F0E4E4');
    $('.data').css('color','black');
    $('#text_for_email').css('color','black');
    $('#submit').css('color','black');
    $('.copyright').css('color','black');
}
