// Create all necessary elements and tie them to a variable.
var stBtn = document.getElementById("#stBtn");
var question = document.querySelector("#question");
var aButtonEL = document.querySelector("btnA");
var bButtonEL = document.querySelector("btnB");
var cButtonEL = document.querySelector("btnC");
var dButtonEL = document.querySelector("btnD");

const nextBtn = document.getElementById("nxtBtn");
const questionContainerEL = document.getElementById("question-container");
const questionEL = document.getElementById("question");
const answerButtonsEL = document.getElementById("answerButtons");

var listItems = document.getElementsByTagName("li");
var divItem = document.getElementsByTagName("div");

var timerEl = document.querySelector("#timer");
var MainBodyEL = document.getElementById("mainBody");

//

//

//
var shuffledQuestions, currentQuestionIndex;

stBtn.addEventListener("click", startGame());
function startGame() {
	stBtn.classList.add("hide");
	questionContainerEL.classList.remove("hide");
	setNextQuestion();
}
function setNextQuestion() {}
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
				timerEl.textContent = "Game Over";
			}
		}, 1000);
	}
});

// -----------questions below this line------------
var question = [
	{
		question: "What is NOT a way to create a pop-up in JS?",
		aButtonEL: "surprise",
		bButtonEL: "prompt",
		cButtonEL: "alert",
		dButtonEL: "confirm",
		answer: "a",
	},
	{
		question: "To ________ is to increase a number by one.",
		aButtonEL: "add",
		bButtonEL: "increment",
		cButtonEL: "increase",
		dButtonEL: "amplify",
		answer: "b",
	},
	{
		question: "To ________ is to decrease a number by one.",
		aButtonEL: "subtract",
		bButtonEL: "decrease",
		cButtonEL: "decrement",
		dButtonEL: "minus",
		answer: "c",
	},
	{
		question:
			"Make this run, only if they are both true. (example === 5 ____ example === 10)",
		aButtonEL: "&&",
		bButtonEL: "&>",
		cButtonEL: "&|",
		dButtonEL: "&=",
		answer: "a",
	},
	{
		question:
			"Make this run, if at least one is true. (example === 5 ____ example === 10)",
		aButtonEL: "||",
		bButtonEL: "//",
		cButtonEL: "--",
		dButtonEL: "><",
		answer: "a",
	},
	{
		question:
			"The ______ statement is used to perform different actions based on different conditions.",
		aButtonEL: "jump",
		bButtonEL: "decide",
		cButtonEL: "action",
		dButtonEL: "switch",
		answer: "d",
	},
	{
		question: 'The ______ statement "jumps out" of a loop.',
		aButtonEL: "append",
		bButtonEL: "stop",
		cButtonEL: "break",
		dButtonEL: "quit",
		answer: "c",
	},
	{
		question: 'The ______ statement "jumps over" one iteration in the loop.',
		aButtonEL: "continue",
		bButtonEL: "skip",
		cButtonEL: "jump",
		dButtonEL: "return",
		answer: "a",
	},
	{
		question: "A JavaScript Boolean represents one of two values:",
		aButtonEL: "UP / DOWN",
		bButtonEL: "YES / NO",
		cButtonEL: "ON / OFF",
		dButtonEL: "TRUE / FALSE",
		answer: "d",
	},
];
var score = 0;

for (var i = 0; i < question.length; i++) {
	var response = window.question(question[i].question);
	if (response === question[i].answer) {
		score++;
		// return "Correct!";
	}
	// else () {
	// 	timer-10;
	// 	return("Incorrect")
	// }
	// else if needs -5 seconds.
}
