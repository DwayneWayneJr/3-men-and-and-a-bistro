// var today = new Date();
var hourNow = prompt("What time is it?(24hr clock)");
var greeting;

if (hourNow < 12) {
  greeting = 'Good Morning!';
} else if (hourNow >= 12 && hourNow <= 17) {
  greeting = 'Good Afternoon!';
} else if (hourNow >= 17 && hourNow <= 24) {
  greeting = 'Good Evening!';
} else {
  greeting = 'Welcome!'
}
document.write('<h3>'+ greeting + '</h3>');