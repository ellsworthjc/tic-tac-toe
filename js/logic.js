/**
 *
 * @param {Array} board
 * @returns
 */
export function checkForGameEnd(board) {
	const scores = {
		X: 1,
		O: -1,
		Draw: 0,
	};

	const result = {
		winner: "",
		value: "",
	};

	// top row
	if (allEqualAndNotEmpty([board[0], board[1], board[2]])) {
		console.log(`Win ${board[0]} 1: top row`);
		result.winner = board[0];
		result.value = scores[board[0]];
	}
	// middle row
	else if (allEqualAndNotEmpty([board[3], board[4], board[5]])) {
		console.log(`Win ${board[3]} 2: middle row`);
		result.winner = board[3];
		result.value = scores[board[3]];
	}
	// bottom row
	else if (allEqualAndNotEmpty([board[6], board[7], board[8]])) {
		console.log(`Win ${board[6]} 3: bottom row`);
		result.winner = board[6];
		result.value = scores[board[6]];
	}
	// left column
	else if (allEqualAndNotEmpty([board[0], board[3], board[6]])) {
		console.log(`Win ${board[0]} 4: left col`);
		result.winner = board[0];
		result.value = scores[board[0]];
	}
	// middle column
	else if (allEqualAndNotEmpty([board[1], board[4], board[7]])) {
		console.log(`Win ${board[1]} 5: middle col`);
		result.winner = board[1];
		result.value = scores[board[1]];
	}
	// right column
	else if (allEqualAndNotEmpty([board[2], board[5], board[8]])) {
		console.log(`Win ${board[2]} 6: right col`);
		result.winner = board[2];
		result.value = scores[board[2]];
	}
	// top left to bottom right diagonal
	else if (allEqualAndNotEmpty([board[0], board[4], board[8]])) {
		console.log(`Win ${board[0]} 7: tl to br`);
		result.winner = board[0];
		result.value = scores[board[0]];
	}
	// bottom right to top left diagonal
	else if (allEqualAndNotEmpty([board[6], board[4], board[2]])) {
		console.log(`Win ${board[6]} 8: br to tl`);
		result.winner = board[6];
		result.value = scores[board[6]];
	}
	// game is a draw
	else if (board.every(cell => cell != "")) {
		console.log("Draw");
		result.winner = "Draw";
		result.value = scores["Draw"];
	}
	// game continues
	else {
		console.log("No win yet...");
		return false;
	}
	return result;
}

/**
 *
 * @param {Array} array
 * @returns {Array}
 */
function allEqualAndNotEmpty(array) {
	return array.every(cell => cell != "" && cell === array[0]);
}
