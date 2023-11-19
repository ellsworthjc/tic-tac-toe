/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function getCellValue(cell) {
	const xCell = cell.querySelector("[data-x]");
	const oCell = cell.querySelector("[data-o]");
	if (xCell.style.display === "block" && oCell.style.display === "none") {
		return "X";
	} else if (xCell.style.display === "none" && oCell.style.display === "block") {
		return "O";
	} else if (xCell.style.display === "none" && oCell.style.display === "none") {
		return "";
	} else {
		console.error("Invalid Board");
		return "Invalid Board";
	}
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function isXCell(cell) {
	return cell.querySelector("[data-x]").style.display === "block";
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function isOCell(cell) {
	return cell.querySelector("[data-o]").style.display === "block";
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function isEmptyCell(cell) {
	const xCell = cell.querySelector("[data-x]");
	const oCell = cell.querySelector("[data-o]");
	return xCell.style.display === "none" && oCell.style.display === "none";
}

/**
 *
 * @param {Array} array
 * @returns
 */
export function allEqualAndNotEmpty(array) {
	return array.every(cell => cell != "" && cell === array[0]);
}