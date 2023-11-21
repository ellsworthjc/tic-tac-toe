import * as logic from "./logic.js";

/**
 *
 * @param {Array} board
 * @param {Array} emptyCells
 * @param {Number} depth
 * @param {Boolean} isMaximizing
 * @returns {Number} value of best move
 */
export function minimax(board, depth, isMaximizing) {
	console.log("...minimaxing...");

	// START ACTUAL MINIMAX //
	// const gameEnd = logic.checkForGameEnd(board);
	// if (gameEnd) {
	// 	console.log("Value:", gameEnd.value);
	// 	return gameEnd.value;
	// }

	// const emptyCells = getEmptyCellIndexes(board);

	// if (isMaximizing) {
	// 	console.log("maximizing");
	// 	minimax(board, emptyCells, 0, true);
	// } else {
	// 	console.log("minimizing");
	// 	minimax(board, emptyCells, 0, false);
	// }
	// END ACTUAL MINIMAX //

	// just return random cell for now
	const emptyCells = getEmptyCellIndexes(board);
	const move = emptyCells[Math.floor(Math.random() * emptyCells.length)];

	console.log({move});
	return move;
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
 * Essentially a "getBestMove"
 *
 * @param {Array} board
 * @returns {Number} cell number to play best move
 */
export function takeAITurn(board) {
	console.log("AI thinking...");
	let bestMove = -Infinity;

	bestMove = Math.max(bestMove, minimax(board, 0, true));
	return bestMove;
}
