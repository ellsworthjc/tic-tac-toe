export function minimax() {
	console.log("...minimaxing...");
	return 1;
}

/**
 *
 * @param {Array} board
 * @returns {Array} array of empty cells
 */
export function getEmptyCellIndexes(board) {
	let emptyCells = [];
	for (const i in board) {
		if (board[i] === "") {
			emptyCells.push(i);
		}
	}
	return emptyCells;
}

/**
 *
 * @param {Array} board
 * @returns {Number} cell number to play best move
 */
export function takeAITurn(board) {
	console.log("AI thinking...");
	const emptyCells = getEmptyCellIndexes(board);

	// return random cell for now but we would minimax here
	minimax();
	const move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
	console.log({move});
	return move;
}
