import * as logic from "./logic.js";

/**
 *
 * @param {Array} incomingBoard
 * @param {Object} players
 * @param {Number} depth
 * @param {Boolean} isMaximizing
 * @returns {Number} score
 */
export function minimax(incomingBoard, players, depth, isMaximizing) {
	const shouldMinimax = true;

	let score;
	const board = [...incomingBoard];
	console.log({board});
	console.log({depth});

	if (shouldMinimax) {
		// START ACTUAL MINIMAX //
		console.log("...actually minimaxing...");
		const gameEnd = logic.checkForGameEnd(board);
		if (gameEnd) {
			console.log(`%cGame End Value: ${gameEnd.value}`, "color: red; font-size: 1.125rem;");
			return gameEnd.value;
		}

		const emptyCells = getEmptyCellIndexes(board);

		if (isMaximizing) {
			console.log("%cmaximizing", "color: lightgreen");
			score = -Infinity;
			for (const cell of emptyCells) {
				board[cell] = players.maximizing;
				score = Math.max(score, minimax(board, players, depth + 1, false));
			}
		} else {
			console.log("%cminimizing", "color: yellow");
			score = Infinity;
			for (const cell of emptyCells) {
				board[cell] = players.minimizing;
				score = Math.min(score, minimax(board, players, depth + 1, true));
			}
		}
		// END ACTUAL MINIMAX //
	} else {
		// just return random cell for now
		// actually, minimax is supposed to return a value instead of a cell so this will probably stop working since I fixed that haha
		const emptyCells = getEmptyCellIndexes(board);
		score = emptyCells[Math.floor(Math.random() * emptyCells.length)];
	}

	console.log({score});
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
		console.log(`%cTESTING CELL NUMBER: ${cell}`, "color: cyan; font-size: 2rem;");

		let score = minimax(board, players, 0, true);
		console.log(`%cSCORE IS: ${score}`, "color: cyan; font-size: 2rem;");

		console.log("bestScore, score", bestScore, score);
		if (score > bestScore) {
			bestScore = score;
			console.log("bestScore updated", bestScore);
			bestMove = cell;
			console.log(`%cBEST MOVE IS: ${bestMove}`, "color: cyan; font-size: 2rem;");
		}
	}
	console.log(`%cRETURNED BEST MOVE IS: ${bestMove}`, "color: cyan; font-size: 2rem;");
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