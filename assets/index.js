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
	console.log("stbtn runnig");
	generateQuestion();
	setTime();
	stBtnEL.style.display = "none";
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
			buttonAEL.style.display = "none";
			buttonBEL.style.display = "none";
			buttonCEL.style.display = "none";
			buttonDEL.style.display = "none";
			// stBtnEL.style.display = "none";
			runningQuestionIndex = 0;
			// gameOver();
			completeQuiz();
		}
	}, 1000);
}

// save the scores back in localstorage
function completeQuiz() {
	//   instructions.setAttribute("class", "hide");
	//   quizCont.setAttribute("class", "hide");
	//   endGame.removeAttribute("class", "hide");
	//   initials.removeAttribute("class", "hide");
	submit.style.display = "block";
	userName.style.display = "block";

	// needs modified..............
	//   var button = document.createElement("button");
	//   button.innerText = "Save Score";
	submit.addEventListener("click", function (event) {
		event.preventDefault();
		var Scores = JSON.parse(localStorage.getItem("Scores")) || [];
		console.log(Scores);

		var initials = userName.value + ": " + score;

		Scores.push(initials);
		console.log(Scores);
		localStorage.setItem("Scores", JSON.stringify(Scores));
		submit.outerHTML = "";
		userName.outerHTML = "";
		// initials.setAttribute("class", "hide");
		// document.getElementById("Scores").setAttribute("class", "hide");

		for (var i = 0; i < Scores.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = Scores[i];

			document.getElementById("highScores").append(li);
		}
		userName.value = " ";
		// stBtnEL.style.display = "block";
		// stBtnEL.innerHTML = "Replay?";
	}); // save the player's score
	console.log("highScores");

	// display the scoreboard
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
