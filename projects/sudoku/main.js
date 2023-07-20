import { getActiveBoards } from "./utils.js";

const boardElms = document.querySelectorAll(".board");

function handleCell({ boardIdx, cellIdx }) {
	// clear all active cells
	for (const boardElm of boardElms) {
		for (const cellElm of boardElm.children) {
			cellElm.className = "cell";
		}
	}

	// active current board
	const currentBoardElm = boardElms[boardIdx];
	for (const cellElm of currentBoardElm.children) {
		cellElm.className = "cell active";
	}

	// active row and column cells
	const activeBoards = getActiveBoards({ boardIdx, cellIdx });

	for (let activeBoardIdx in activeBoards) {
		const activeBoardElm = boardElms[activeBoardIdx];
		const activeCells = activeBoards[activeBoardIdx];

		for (let activeCellIdx of activeCells) {
			const activeCellElm = activeBoardElm.children[activeCellIdx];
			activeCellElm.className = "cell active";
		}
	}
}

function init() {
	for (let boardIdx = 0; boardIdx < boardElms.length; boardIdx++) {
		const boardElm = boardElms[boardIdx];

		for (let cellIdx = 0; cellIdx < boardElm.children.length; cellIdx++) {
			const cellElm = boardElm.children[cellIdx];

			cellElm.addEventListener("click", () => handleCell({ cellIdx, boardIdx }));
		}
	}
}

init();
