import { getCellOfBoard } from "./utils.js";

function createBoards() {
	const boards = [];

	let counter = 1;
	for (let i = 0; i < 9; i++) {
		const board = new Array(9).fill().map(() => counter++);
		boards.push(board);
	}

	return boards;
}

function createElement({ type = "div", className = "" } = {}) {
	const element = document.createElement(type);
	element.className = className;

	return element;
}

function handleCell({ boardIdx, cellIdx }) {
	const boardsElm = document.querySelectorAll(".board");
	const currentBoardElm = boardsElm[boardIdx];

	for (const cellElm of currentBoardElm.children) {
		cellElm.classList.add("active");
	}

	const activeCells = getCellOfBoard({ boardIdx, cellIdx });
	console.log("activeCells  = ", activeCells);
}

function init() {
	const sudokuElm = createElement({ className: "sudoku" });

	const boards = createBoards();

	for (let boardIdx = 0; boardIdx < boards.length; boardIdx++) {
		const board = boards[boardIdx];

		const boardElm = createElement({ className: "board" });

		for (let cellIdx = 0; cellIdx < board.length; cellIdx++) {
			const cell = board[cellIdx];

			const cellElm = createElement({ className: "cell" });
			cellElm.innerText = cell;

			const infoElm = createElement({ className: "info" });
			infoElm.innerText = `${boardIdx}-${cellIdx}`;
			cellElm.appendChild(infoElm);

			cellElm.addEventListener("click", () => handleCell({ cellIdx, boardIdx }));

			boardElm.appendChild(cellElm);
		}

		sudokuElm.appendChild(boardElm);
	}

	document.body.appendChild(sudokuElm);
}

init();
