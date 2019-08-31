// var today = new Date();
var hourNow = prompt("What's the hour?");
var greeting;

if (hourNow < 12) {
  greeting = 'Good morning'
} else if (hourNow < 15) {
  greeting = 'Good afternoon'
} else {
  greeting = 'Welcome'
}
document.write('<h3>'+ greeting + '</h3>');