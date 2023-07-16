// UI VARS
const resetBtn = document.querySelector(".reset-btn");
const boardElm = document.querySelector(".board");
const playerElm = document.querySelector(".player");
const historiesElm = document.querySelector(".histories");

// LOGIC VARS
let boards = [new Array(9).fill(null)];
let currentStep = 1;
let winnerExist = false;

function getWinner(board) {
	const winnerCondensations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let [a, c, b] of winnerCondensations)
		if (board[a] === board[b] && board[b] === board[c]) return board[a];

	return "";
}

// HANDLE FUNCTIONS
function handleCell(cellIdx) {
	if (winnerExist) return;
	const nextBoard = [...boards[boards.length - 1]];
	if (nextBoard[cellIdx]) return;

	const currentPlayer = currentStep % 2 === 1 ? "X" : "O";
	nextBoard[cellIdx] = currentPlayer;

	renderHistories();
	boards.push(nextBoard);
	currentStep++;
	renderBoard(nextBoard);
	renderPlayer();
}

function handleReset() {
	currentStep = 0;
	boards = [new Array(9).fill(null)];
	winnerExist = false;
	renderBoard(boards[currentStep]);
}

function handleHistory(stepIdx) {
	const currentBoard = boards[stepIdx];
	console.log("currentBoard  = ", currentBoard);
}
// UI FUNCTIONS
function renderBoard(board = []) {
	const cellElms = boardElm.children;

	for (let i = 0; i < cellElms.length; i++) {
		const cell = board[i];
		const cellElm = cellElms[i];
		cellElm.innerText = cell;
		cellElm.onclick = () => handleCell(i);
	}
}

function renderHistories() {
	const historiesCount = boards.length;
	historiesElm.innerHTML = "";
	for (let i = 0; i < historiesCount; i++) {
		const historyBtn = document.createElement("button");
		const isCurrent = i === currentStep;

		if (i === 0) historyBtn.innerText = "Go to game start(current)";
		else historyBtn.innerText = `Go to move #${i + 1}(current)`;

		historyBtn.onclick = () => handleHistory(i);
		historiesElm.appendChild(historyBtn);
	}
}

function renderPlayer() {
	const winner = getWinner(boards[boards.length - 1]);
	const currentPlayer = (currentStep - 1) % 2 === 1 ? "X" : "O";
	if (winner) {
		winnerExist = true;
		playerElm.innerText = `Winner ${currentPlayer}`;
		return;
	}

	const nextPlayer = currentStep % 2 === 1 ? "X" : "O";
	playerElm.innerText = `Next Player: ${nextPlayer}`;
}

// LOGIC FUNCTIONS

function startGame() {
	renderBoard(boards[boards.length - 1]);
	resetBtn.addEventListener("click", handleReset);
}

function init() {
	startGame();
}

init();
