export function minimax() {
	console.log("...minimaxing...");
	return 1;
}

export function getEmptyCellIndexes(board) {
	let emptyCells = [];
	for (const i in board) {
		if (board[i] === "") {
			emptyCells.push(i);
		}
	}
	console.log({emptyCells});
	return emptyCells;
}

export function takeAITurn(board) {
	console.log("takeAITurn");
	const emptyCells = getEmptyCellIndexes(board);
	return getBestMove(emptyCells);
}

function getBestMove(emptyCells) {
	// return random cell for now
	const move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
	console.log({move});
	return move;
}
