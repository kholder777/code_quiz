// Create all necessary elements and tie them to a variable.
var stBtnEL = document.getElementById("stBtn");
var questionEL = document.querySelector("#question");
var buttonAEL = document.querySelector("#btnA");
var buttonBEL = document.querySelector("#btnB");
var buttonCEL = document.querySelector("#btnC");
var buttonDEL = document.querySelector("#btnD");
var highScoreEL = document.querySelector("#highScore");
var listItems = document.getElementsByTagName("li");
var divItem = document.getElementsByTagName("div");

var timerEl = document.querySelector("#timer");
var scoreBoardEL = document.getElementById("scoreBoard");
let runningQuestionIndex = 0;
var remainingTime = 9;
var score = 0;
var highScore;

// var hsName = prompt("Score: " + localScore + "Your name here");

// check answer function
function checkAnswer() {
	var choice = this.getAttribute("data-value");
	console.log(runningQuestionIndex);
	let q = questions[runningQuestionIndex];
	if (choice === q.answer) {
		remainingTime = remainingTime + 4;
		score++;
	} else {
		remainingTime = remainingTime - 6;
	}
	scoreBoardEL.innerText = score;
	runningQuestionIndex++;
	if (runningQuestionIndex <= questions.length) {
		generateQuestion();
		console.log("running");
	}
}
// start game button/function
stBtnEL.addEventListener("click", function () {
	generateQuestion();
	setTime();
	stBtnEL.outerHTML = "";
});
// create password generator
function generateQuestion() {
	let q = questions[runningQuestionIndex];
	questionEL.innerHTML = q.question;
	buttonAEL.innerHTML = q.aButtonEL;
	buttonBEL.innerHTML = q.bButtonEL;
	buttonCEL.innerHTML = q.cButtonEL;
	buttonDEL.innerHTML = q.dButtonEL;
}

buttonAEL.addEventListener("click", checkAnswer);
buttonBEL.addEventListener("click", checkAnswer);
buttonCEL.addEventListener("click", checkAnswer);
buttonDEL.addEventListener("click", checkAnswer);
// timer
function setTime() {
	var timerInterval = setInterval(function () {
		remainingTime = remainingTime - 1;
		timerEl.textContent = "You have " + remainingTime + " seconds remaining.";
		if (remainingTime <= 0) {
			clearInterval(timerInterval);
			scoreBoardEL.textContent = score;
			newScore = score;
			timerEl.textContent = "Game Over, man.";
			questionEL.textContent = "";
			buttonAEL.outerHTML = "";
			buttonBEL.outerHTML = "";
			buttonCEL.outerHTML = "";
			buttonDEL.outerHTML = "";
			// stBtnEL.outerHTML = "";
			runningQuestionIndex = 0;
			gameOver();
			// restart button?
		}
	}, 1000);
}
function gameOver() {
	// check new high score value.

	// if the new high score is better than the existing, replace the existing.
	// if (newScore > highScore) {
	// replace existing
	// highScore = newScore;
	// function topScore() {
	// let tempPlayer = JSON.parse(localStorage.getItem("playerName"));
	// let tempScore = JSON.parse(localStorage.getItem('newScore"));
	// scoreBoardEL.innerHTML = "";
	// }
	// } else {
	// document write "not. good. enough."
	// }
	var highScore = localStorage.getItem("highScore");
	if (highScore && newScore > highScore) {
		highScoreEL.textContent = "highScore new!";

		localStorage.setItem("highScore", newScore);
	} else {
		localStorage.setItem("highScore", newScore);
		// add score as highScore.
	}
}

// -----------questions below this line------------
var questions = [
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
