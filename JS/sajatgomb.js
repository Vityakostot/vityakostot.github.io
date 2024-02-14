let mybutton = document.getElementById("btt");

window.onscroll = function() {gorgetes()};

function gorgetes() 
{
  if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250) 
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "none";
  }
}

function backtotop() 
{
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}