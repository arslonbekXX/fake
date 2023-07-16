// UI VARIABLES
const gameZone = document.querySelector(".game-zone");
const controlZone = document.querySelector(".control-zone");
const controlForm = document.forms[0];
const xInput = document.getElementById("x");
const yInput = document.getElementById("y");

// HANDLER FUNCTIONS
function handleSubmit(event) {
	event.preventDefault();
	const x = +xInput.value;
	const y = +yInput.value;

	controlZone.setAttribute("class", "control-zone d-none");
	gameZone.setAttribute("class", "game-zone");

	startGame(x, y);
}

function startGame(x, y) {
	const count = x * y;
	const games = [];

	for (let i = 0; i < count; i++) {
		const game = document.createElement("div");
		game.className = "game";

		for (let i = 0; i < 9; i++) {
			const cell = document.createElement("button");
			cell.className = "cell";
			game.appendChild(cell);
		}
		games.push(game);
	}

	gameZone.append(...games);
	gameZone.style.gridTemplateColumns = `repeat(${y}, 1fr)`;
	gameZone.style.gridTemplateRows = `repeat(${x}, 1fr)`;

	games.forEach((game) => {
		const cells = game.querySelectorAll(".cell");

		// LOGICAL VARIABLES
		let board = new Array(9).fill(null);
		let nextPlayer = "X";
		let winner = "";

		cells.forEach((cell, idx) => {
			cell.addEventListener("click", () => {
				if (cell.innerText || winner) return;
				board[idx] = nextPlayer;
				cell.innerText = nextPlayer;
				nextPlayer = nextPlayer === "X" ? "O" : "X";

				winner = checkWinner();
				if (winner) {
					game.setAttribute("winner", `Winner - ${winner}`);
					game.classList.add("winner");
				}
			});
		});

		function checkWinner() {
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
	});
}

function addListeners() {
	controlForm.addEventListener("submit", handleSubmit);
}

function init() {
	addListeners();
}

init();
