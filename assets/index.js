// Create all necessary elements and tie them to a variable.
var stBtnEL = document.getElementById("stBtn");
var questionEL = document.querySelector("#question");
var buttonAEL = document.querySelector("#btnA");
var buttonBEL = document.querySelector("#btnB");
var buttonCEL = document.querySelector("#btnC");
var buttonDEL = document.querySelector("#btnD");
var listItems = document.getElementsByTagName("li");
var divItem = document.getElementsByTagName("div");
var userName = document.getElementById("userName");
var submit = document.getElementById("submit");
var highScoreEL = document.getElementById("highScores");
var timerEl = document.querySelector("#timer");
var scoreBoardEL = document.getElementById("scoreBoard");
let runningQuestionIndex = 0;
var remainingTime = 9;
var score = 0;
var highScore;
// var hsName = prompt("Score: " + localScore + "Your name here");
// save the score in localStorage
submit.style.display = "none";
userName.style.display = "none";
// check answer function
function checkAnswer() {
	var choice = this.getAttribute("data-value");
	// console.log(runningQuestionIndex);
	let q = questions[runningQuestionIndex];
	if (choice === q.answer) {
		remainingTime = remainingTime + 3;
		score++;
		console.log("score is:", score);
	} else {
		remainingTime = remainingTime - 7;
	}
	scoreBoardEL.innerText = score;
	runningQuestionIndex++;
	if (runningQuestionIndex <= questions.length) {
		generateQuestion();
	}
}
// start game button/function
stBtnEL.addEventListener("click", function () {
	generateQuestion();
	setTime();
	stBtnEL.outerHTML = "";
});
// create newestSuperScore generator
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
		remainingTime -= 1;
		timerEl.textContent = "You have " + remainingTime + " seconds remaining.";
		if (remainingTime <= 0) {
			clearInterval(timerInterval);
			scoreBoardEL.textContent = score;
			timerEl.textContent = "Game Over, man.";
			questionEL.textContent = "";
			buttonAEL.outerHTML = "";
			buttonBEL.outerHTML = "";
			buttonCEL.outerHTML = "";
			buttonDEL.outerHTML = "";
			// stBtnEL.outerHTML = "";
			runningQuestionIndex = 0;
			// gameOver();
			// completeQuiz(score);
		}
	}, 1000);
}

// -----------------------------------------------------------------------------------------------------------semi-working code-----------------
function completeQuiz(score, initials) {
	// instructions.setAttribute("class", "hide");
	// quizCont.setAttribute("class", "hide");
	// endGame.removeAttribute("class", "hide");
	// initials.removeAttribute("class", "hide");
	// submit.style.display = "block";
	userName.style.display = "block";

	// needs modified..............
	var button = document.createElement("button");
	button.innerText = "Save Score";
	button.addEventListener("click", function (event) {
		var Scores = JSON.parse(localStorage.getItem("Scores")) || [];
		console.log(Scores);

		Scores.push({
			initials: document.getElementById("initials").value,
			points: score,
		});
		console.log(Scores);
		localStorage.setItem("Scores", JSON.stringify(Scores));

		initials.setAttribute("class", "hide");
		document.getElementById("Scores").setAttribute("class", "hide");

		for (var i = 0; i < Scores.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = Scores[i].initials + " " + Scores[i].points;
			document.getElementById("highScores").append(li);
		}
		// why not displaying???
	}); // save the player's score
	// highScoreEL.append(button);
	console.log("highScores");

	// save the scores back in localstorage

	// display the scoreboard
}
// ----------------------------------------------------------------------------------------------------------------------------------------
// function gameOver() {
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
// add score as highScore.
// var highScore = localStorage.getItem("highScore");
// if (highScore && newScore > highScore) {
// 	highScoreEL.textContent = "highScore changed!!";
// 	localStorage.setItem("highScore", newScore);
// } else if (newScore <= highScore) {
// 	// play again message?
// 	// alert("try again?");{
// 	// generateQuestion();
// 	// setTime();}
// } else {
// 	localStorage.setItem("highScore", newScore);
// 	highScoreEL.textContent = "highScore new!";
// 	// create permanent scoreboard on page
// }
// submit.addEventListener("click", function (event) {
// 	// this is where we click to submit the name
// 	event.preventDefault();
// 	var bestUser = highScore + " - " + userName.value.trim();
// 	alert(bestUser);
// 	localStorage.setItem("highScore", highScore);
// 	// sends name to hall of fame?!
// 	//  hall of fame needs to be populated on page at all times.
// });
// }

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
