/**
 *
 * @param {Array} board an array of the values of the board
 */
export function refreshBoard(board) {
	const main = document.querySelector("[data-tic-tac-toe");
	let boardHTML = `<div data-board class="bg-gray-500 w-96 h-96 grid grid-cols-3 text-gray-800 font-black text-9xl select-none">`;
	let cellsHTML = "";
	for (const i in board) {
		cellsHTML += createCell(i, board[i]);
	}
	boardHTML += cellsHTML + "</div>";
	// render to the page
	main.innerHTML = boardHTML;
}

/**
 *
 * @param {Number} cellNumber
 * @param {String} value
 * @returns
 */
function createCell(cellNumber, value) {
	return `
		<div data-board-cell="${cellNumber}" data-middle-left class="flex justify-center items-center w-32 h-32 bg-gray-200 border-8 border-gray-900 hover:bg-gray-300 transition cursor-pointer">
			<div>${value}</div>
		</div>
	`;
}

/**
 *
 * @param {String} text
 * @param  {...String} classes
 */
export function updateStateLabel(text, ...classes) {
	const stateLabel = document.querySelector("[data-state-label]");
	stateLabel.innerText = text;
	for (const styleClass of classes) {
		stateLabel.classList.add(styleClass);
	};
}
