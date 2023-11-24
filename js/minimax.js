import * as logic from "./logic.js";

/**
 *
 * @param {Array} incomingBoard
 * @param {Object} players
 * @param {Number} depth
 * @param {Boolean} isMaximizing
 * @returns {Number} score
 */
export function minimax(board, players, depth, isMaximizing) {
	console.log(isMaximizing ? "maximizing run" : "minimizing run");
	console.log({depth});

	let score;
	const gameEnd = logic.checkForGameEnd(board);
	if (gameEnd) {
		console.log(`%cGame End Value: ${gameEnd.value}`, "color: red;");
		return gameEnd.value;
	}

	const emptyCells = getEmptyCellIndexes(board);

	if (isMaximizing) {
		score = -Infinity;
		for (const cell of emptyCells) {
			board[cell] = players.maximizing;
			score = Math.max(score, minimax(board, players, depth + 1, false));
			board[cell] = "";
		}
	} else {
		score = Infinity;
		for (const cell of emptyCells) {
			board[cell] = players.minimizing;
			score = Math.min(score, minimax(board, players, depth + 1, true));
			board[cell] = "";
		}
	}
	return score;
}

/**
 * Essentially a "getBestMove"
 *
 * @param {Array} board
 * @param {Object} players
 * @returns {Number} cell number to play best move
 */
export function takeAITurn(board, players) {
	console.log("AI thinking...");
	let bestMove;
	let bestScore = -Infinity;
	const emptyCells = getEmptyCellIndexes(board);
	for (const cell of emptyCells) {
		console.log(`%cTesting Cell: ${cell}`, "color: cyan;");
		board[cell] = players.maximizing;
		// isMaximizing should be false if ai is maximizing since we are choosing the initial move already
		// we'll probably want to swap it if ai is O
		let score = minimax(board, players, 0, false);
		board[cell] = "";

		if (score > bestScore) {
			bestScore = score;
			bestMove = cell;
		}
	}
	console.log(`%cRETURNED BEST MOVE IS: ${bestMove}`, "color: cyan;");
	return bestMove;
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