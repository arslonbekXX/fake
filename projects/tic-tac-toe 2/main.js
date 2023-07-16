// UI VARS
const resetBtn = document.querySelector(".reset-btn");
const boardElm = document.querySelector(".board");

// LOGIC VARS
const boards = [[null, null, null, null, null, null, null, null, null]];
let currentStep = 0;
let currentPlayer = "X";

function checkWinner(board) {
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
	const nextBoard = [...boards[currentStep]];
	nextBoard[cellIdx] = currentPlayer;
	currentPlayer = currentPlayer === "X" ? "O" : "X";

	boards.push(nextBoard);
	currentStep++;
	renderBoard(nextBoard);

	console.log("boards = ", boards);
}

// UI FUNCTIONS
function renderBoard(board = []) {
	boardElm.innerHTML = "";
	for (let idx = 0; idx < board.length; idx++) {
		const cell = board[idx];
		const cellElm = document.createElement("div");
		cellElm.className = "cell";
		cellElm.innerText = cell;

		cellElm.addEventListener("click", () => handleCell(idx));
		boardElm.appendChild(cellElm);
	}
}
// LOGIC FUNCTIONS

function startGame() {
	renderBoard(boards[currentStep]);
}

function init() {
	startGame();
}

init();
