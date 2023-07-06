const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const imgDice = document.querySelector(".img--dice");
const player1 = document.getElementById("player--1");
const player2 = document.getElementById("player--2");
const name1 = document.getElementById("name--1");
const name2 = document.getElementById("name--2");
const score1 = document.getElementById("score--1");
const score2 = document.getElementById("score--2");
const currentScore1 = document.getElementById("current--score-1");
const currentScore2 = document.getElementById("current--score-2");

// LOGICAL VARIABLES

let currentPlayer = 1;
const WINNER_SCORE = 15;

// HANDLE FUNCTIONS
function handleRoll(e) {
	const score = Math.floor(Math.random() * 6) + 1;
	const imgURL = `../src/assets/images/dice-${score}.png`;
	imgDice.src = imgURL;
	imgDice.classList.remove("hide");

	const [player, scoreElm, currentScore] = getCurrents();

	if (score !== 1) currentScore.innerText = +currentScore.innerText + score;
	else changePlayer(currentScore, player);
}

function handleNew(e) {
	imgDice.classList.add("hide");
	currentScore1.innerText = "0";
	currentScore2.innerText = "0";
	score1.innerText = "0";
	score2.innerText = "0";

	player1.classList.add("player--active");
	player1.classList.remove("player--winner");
	player2.classList.remove("player--active", "player--winner");
	currentPlayer = 1;

	btnRoll.disabled = false;
	btnHold.disabled = false;
}

function handleHold(e) {
	const [player, score, currentScore] = getCurrents();
	const totalScore = +score.innerText + +currentScore.innerText;
	score.innerText = totalScore;
	currentScore.innerText = "0";

	if (totalScore >= WINNER_SCORE) {
		player.classList.replace("player--active", "player--winner");
		btnHold.disabled = true;
		btnRoll.disabled = true;
		imgDice.classList.add("hide");
	} else changePlayer(currentScore, player);
}

// LOGIC FUNCTIONS

function addListeners() {
	btnRoll.addEventListener("click", handleRoll);
	btnNew.addEventListener("click", handleNew);
	btnHold.addEventListener("click", handleHold);

	window.addEventListener("keydown", (event) => {
		switch (event.code) {
			case "Enter":
				return handleHold();
			case "Space":
				return handleRoll();
			case "KeyR":
				return event.altKey && handleNew();
		}
	});
}

function getCurrents() {
	if (currentPlayer === 1) return [player1, score1, currentScore1];
	return [player2, score2, currentScore2];
}

function changePlayer(currentScore, player) {
	const nextPlayer = currentPlayer === 1 ? player2 : player1;

	currentPlayer = currentPlayer === 1 ? 2 : 1;
	currentScore.innerText = "0";

	player.classList.remove("player--active");
	nextPlayer.classList.add("player--active");
}

function init() {
	addListeners();
}

init();
