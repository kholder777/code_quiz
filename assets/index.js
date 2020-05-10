// Create all necessary elements and tie them to a variable.
var h1EL = document.createElement("h1");
var h2EL = document.createElement("h2");
var h3EL = document.createElement("h3");
var pEL = document.createElement("p");
var divEL = document.createElement("div");
var olEL = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

var btnEL = document.createElement("button");
var aBtnEL = document.querySelector("buttonA");
var bBtnEL2 = document.querySelector("buttonB");
var cBtnEL3 = document.querySelector("buttonC");
var dBtnEL4 = document.querySelector("buttonD");

var listItems = document.getElementsByTagName("li");
var divItem = document.getElementsByTagName("div");

var timerEl = document.querySelector("#timer");
var MainBodyEL = document.getElementById("mainBody");
//
//
var remainingTime = 2;

function setTime() {
	var timerInterval = setInterval(function () {
		remainingTime = remainingTime - 1;
		timerEl.textContent = "You only have " + remainingTime + " seconds left!";

		if (remainingTime === 0) {
			clearInterval(timerInterval);
			// sendMessage("Game Over");
		}
	}, 1000);
}

// function sendMessage() {
// 	timerEl.textContent = " ";
// 	// this is how to append the main body whenever the time finally runs out.
// 	MainBodyEL.appendChild(variableHere);

// 	var variableHere = document.createElement("Node", "not a number!");
// }

setTime();
// Append all the elements

// Style all the elements

// -----------questions below this line------------
// 1) What is not a way to create a pop-up in JS?
// x)surprise b)prompt c)alert d)confirm
//
// 2) To ________ is to increase a number by one.
// x)increment b)add c)increase d)amplify
//
// 3) To ________ is to decrease a number by one.
// x)decrement b)subtract c)decrease d)minus
//
// 4) Make this run, only if they are both true. (example === 5 ____ example === 10)
// x)&& b)&> c)&| d)&=
//
// 5) Make this run, if at least one is true. (example === 5 ____ example === 10)
// x)|| b)\\ c)-- d)><
//
// 6) The ______ statement is used to perform different actions based on different conditions.
// x)switch b)decide c)action d)jump
//
// 7) The ______ statement "jumps out" of a loop.
// x)break b)stop c)append d)quit
//
// 8) The ______ statement "jumps over" one iteration in the loop.
// x)continue b)skip c)jump d)return
//
// 9) A JavaScript Boolean represents one of two values: true or false.
// x)UP/DOWN b)YES / NO c)ON / OFF d)TRUE / FALSE
//
// 10)
//
//
//
//
//
// Set the body to a variable.
// var body = document.body;
