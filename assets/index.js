// Create all necessary elements and tie them to a variable.

var h2EL = document.createElement("h2");
var h3EL = document.createElement("h3");
var pEL = document.createElement("p");
var divEL = document.createElement("div");
var olEL = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

var stBtn = document.getElementById("stBtn");
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
const startBtn = document.getElementById("stBtn");
const nextBtn = document.getElementById("nxtBtn");
const questionContainerEL = document.getElementById("question-container");
const questionEL = document.getElementById("question");
const answerButtonsEL = document.getElementById("answerButtons");
//
var shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener("click", startGame);
//
function startGame() {}

// add event listener for start quiz button (#stBtn).
//
stBtn.addEventListener("click", function () {
	setTime();

	// start game
	//
	// append body div material and populate first question.
	var remainingTime = 2;

	function setTime() {
		var timerInterval = setInterval(function () {
			remainingTime = remainingTime - 1;
			timerEl.textContent = "You have " + remainingTime + " seconds remaining.";

			if (remainingTime === 0) {
				clearInterval(timerInterval);
				return "Game Over";
			}
		}, 1000);
	}
});

// -----------questions below this line------------
const questions = [
	{
		prompt:
			"What is not a way to create a pop-up in JS?\n (a)surprise (b)prompt (c)alert (d)confirm",
		answer: "a",
	},
	{
		prompt:
			"To ________ is to increase a number by one.\n a)add b)increment c)increase d)amplify",
		answer: "b",
	},
	{
		prompt:
			"To ________ is to decrease a number by one.\n a)subtract b)decrease c)decrement d)minus",
		answer: "c",
	},
	{
		prompt:
			"Make this run, only if they are both true. (example === 5 ____ example === 10)\n a)&& b)&> c)&| d)&=",
		answer: "a",
	},
];
// var score = 0;

// for(var i=0; i < questions.length; i++){
// 	var response = window.prompt(questions[i].prompt);
// 	if (response === questions[i].answer){
// 		score++;
// 		return("Correct!")
// 	} else () {
// 		timer-10;
// 		return("Incorrect")
// 	}
// 	// else if needs -5 seconds.
// }

//
//
//
//
//
//
//
//
//
//
// ------------------remaining questions------------
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
