// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2022 12:10:00").getTime();

// Update countdown every sec
var x = setInterval(function() {
  
// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations - day, hours, min and sec
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
// Output the results
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("min").innerHTML = minutes;
document.getElementById("sec").innerHTML = seconds;

//showing minimum two digits 
document.getElementById("days").innerHTML = (days < 10) ? ('0' + days) : days;
document.getElementById("hours").innerHTML = (hours < 10) ? ('0' + hours) : hours;
document.getElementById("min").innerHTML = (minutes < 10) ? ('0' + minutes) : minutes;
document.getElementById("sec").innerHTML = (seconds < 10) ? ('0' + seconds) : seconds;

// After countdown over 
   if (distance < 0) {
     clearInterval(x);
document.getElementById("days").innerHTML = "00";
document.getElementById("hours").innerHTML = "00";
document.getElementById("min").innerHTML = "00";
document.getElementById("sec").innerHTML = "00";
document.getElementById("over").innerHTML = "Time Is Over...";
     
   }
  
}, 1000);
