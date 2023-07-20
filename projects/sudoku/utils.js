const activeRows = {
	0: [0, 1, 2],
	1: [0, 1, 2],
	2: [0, 1, 2],
	3: [3, 4, 5],
	4: [3, 4, 5],
	5: [3, 4, 5],
	6: [6, 7, 8],
	7: [6, 7, 8],
	8: [6, 7, 8],
};

const activeColumns = {
	0: [0, 3, 6],
	1: [1, 4, 7],
	2: [2, 5, 8],
	3: [0, 3, 6],
	4: [1, 4, 7],
	5: [2, 5, 8],
	6: [0, 3, 6],
	7: [1, 4, 7],
	8: [2, 5, 8],
};

export const getRows = (activeIdx) => {
	return activeRows[activeIdx];
};

export const getColumns = (activeIdx) => {
	return activeColumns[activeIdx];
};

export const getActiveBoards = ({ boardIdx, cellIdx }) => {
	const result = {};

	const rowBoards = getRows(boardIdx);

	for (const row of rowBoards) {
		if (row !== boardIdx) result[row] = getRows(cellIdx);
	}

	const columnBoards = getColumns(boardIdx);

	for (const column of columnBoards) {
		if (column !== boardIdx) result[column] = getColumns(cellIdx);
	}

	return result;
};
