// UI VARIABLES
const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelectorAll(".btn-reset");
const winnerElm = document.querySelector("h4");

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

		console.log("board = ", board);
		winner = checkWinner();
		if (winner) {
			winnerElm.innerText = `Winner ${winner}`;
			winnerElm.style.display = "block";
		}
	});
});

function checkWinner() {
	const winnerCondentions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let [a, c, b] of winnerCondentions)
		if (board[a] === board[b] && board[b] === board[c]) return board[a];

	return "";
}
