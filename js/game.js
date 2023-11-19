import * as logic from "./logic.js";

export function checkForWin(board) {
	let boardArray = [];
	// build board array
	for (const cell of board) {
		boardArray.push(logic.getCellValue(cell));
	}

	// top row
	if (allEqualAndNotEmpty([boardArray[0], boardArray[1], boardArray[2]])
	// middle row
	|| allEqualAndNotEmpty([boardArray[3], boardArray[4], boardArray[5]])
	// bottom row
	|| allEqualAndNotEmpty([boardArray[6], boardArray[7], boardArray[8]])
	// left column
	|| allEqualAndNotEmpty([boardArray[0], boardArray[3], boardArray[6]])
	// middle column
	|| allEqualAndNotEmpty([boardArray[1], boardArray[4], boardArray[7]])
	// right column
	|| allEqualAndNotEmpty([boardArray[2], boardArray[5], boardArray[8]])
	// top left to bottom right diagonal
	|| allEqualAndNotEmpty([boardArray[0], boardArray[4], boardArray[8]])
	// bottom right to top left diagonal
	|| allEqualAndNotEmpty([boardArray[6], boardArray[4], boardArray[2]])) {
		console.log("Win!");
		return true;
	}
	// no win
	else {
		console.log("No win yet...");
		return false;
	}
}

export function allEqualAndNotEmpty(array) {
	return array.every(cell => cell != "" && cell === array[0]);
}