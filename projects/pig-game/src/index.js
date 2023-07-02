const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const imgDice = document.querySelector(".img--dice");
const player1 = document.getElementById("player--1");
const player2 = document.getElementById("player--2");
const score1 = document.getElementById("score--1");
const score2 = document.getElementById("score--2");
const currentScore1 = document.getElementById("current--score-1");
const currentScore2 = document.getElementById("current--score-2");

// HANDLE FUNCTIONS
function handleRoll(e) {
	console.log(e.target);
}
// LOGIC FUNCTIONS

function addListeners() {
	btnRoll.addEventListener("click", handleRoll);
}
function init() {
	addListeners();
}

init();
