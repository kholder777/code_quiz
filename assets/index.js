// Create all necessary elements and tie them to a variable.

var stBtn = document.getElementById("stBtn");
var btnEL = document.createElement("button");
var aButtonEL = document.querySelector("btnA");
var bButtonEL2 = document.querySelector("btnB");
var cButtonEL3 = document.querySelector("btnC");
var dButtonEL4 = document.querySelector("btnD");

const startBtn = document.getElementById("stBtn");
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

startBtn.addEventListener("click", startGame);
//
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
const question = [
	{
		question: "What is not a way to create a pop-up in JS?",
		choiceA: "surprise",
		choiceB: "prompt",
		choiceC: "alert",
		choiceD: "confirm",
		answer: "a",
	},
	{
		question: "To ________ is to increase a number by one.",
		choiceA: "add",
		choiceB: "increment",
		choiceC: "increase",
		choiceD: "amplify",
		answer: "b",
	},
	{
		question: "To ________ is to decrease a number by one.",
		choiceA: "subtract",
		choiceB: "decrease",
		choiceC: "decrement",
		choiceD: "minus",
		answer: "c",
	},
	{
		question:
			"Make this run, only if they are both true. (example === 5 ____ example === 10)",
		choiceA: "&&",
		choiceB: "&>",
		choiceC: "&|",
		choiceD: "&=",
		answer: "a",
	},
	{
		question:
			"Make this run, if at least one is true. (example === 5 ____ example === 10)",
		choiceA: "||",
		choiceB: "//",
		choiceC: "--",
		choiceD: "><",
		answer: "a",
	},
	{
		question:
			"The ______ statement is used to perform different actions based on different conditions.",
		choiceA: "jump",
		choiceB: "decide",
		choiceC: "action",
		choiceD: "switch",
		answer: "d",
	},
	{
		question: 'The ______ statement "jumps out" of a loop.',
		choiceA: "append",
		choiceB: "stop",
		choiceC: "break",
		choiceD: "quit",
		answer: "c",
	},
	{
		question: 'The ______ statement "jumps over" one iteration in the loop.',
		choiceA: "continue",
		choiceB: "skip",
		choiceC: "jump",
		choiceD: "return",
		answer: "a",
	},
	{
		question: "A JavaScript Boolean represents one of two values:",
		choiceA: "UP / DOWN",
		choiceB: "YES / NO",
		choiceC: "ON / OFF",
		choiceD: "TRUE / FALSE",
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
