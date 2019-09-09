// this function should both change the bg color and the greeting within the same call
var hourNow = prompt("What time is it? (military time)");
var greeting;
var color;
while( isNaN(hourNow) )
    hourNow = prompt("Please enter a number between 0 and 24");

// the WHILE above should ensure that only numbers are entered for the time prompt


if (hourNow > 12) {
    setClosedMode();
} else if (hourNow >= 17 && hourNow <= 24) {
    setOpenMode();
} else {
    setDefault();
}

function setClosedMode() {
    color = 'lightgrey';
    greeting = 'Sorry We Are Closed!';
    console.log(color + greeting);
}

function setOpenMode() {
    color = 'lightblue';
    greeting = 'Lets Grab a Bite!';
    console.log(color + greeting);
}

function setDefault() {
    color = 'purple';
    greeting = 'Welcome!';
    console.log(color + greeting);
}

document.body.style.backgroundColor = color;
document.write('<h3>'+ greeting +'</h3>');

// should create a pop-up that creates boolean response to Hungry y/n?
var hungry = confirm("Are you ready to view the menu?");
if (hungry == true) {
alert("Welcome to 3 Men and a Bistro!");
} else {
  alert("Come back later!")
}