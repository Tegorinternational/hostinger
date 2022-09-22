function myFunction(x) 
{ 
  x.classList.toggle("fa-plus-square"); 
} 
function openNav() 
{ 
  var e = document.getElementById("mySidenav"); 
if (e.style.width == '250px') { 
  e.style.width = '0px'; } 
else { 
  e.style.width = '250px'; } 
  
}
function closeNav() 
{ 
  document.getElementById("mySidenav").style.width = "0"; } 


